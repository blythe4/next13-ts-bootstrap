import { convertXmlToJson } from "@/app/component/ConverXmlToJson";
import { NextRequest, NextResponse } from "next/server";
import { fetchWithTimeout } from "@/app/util/util";

/**
 * 00 정상적으로 처리된 경우 (검색조건이 잘못되어 조회데이터가 없는 경우도 해당됩니다)
 * 11 인증키를 입력하지 않았거나 발급받은 인증키를 사용하지 않은 경우
 * 12 발급받은 인증키를 사용하였으나 농사로 관리자에 의해 일시 중지된 경우 (농사로 시스템 관리자에게 문의하기 바랍니다)
 * 13 농사로에서 제공하는 서비스 및 오퍼레이션이 아닌 경우
 * 15 AJAX 방식의 경우 Open API 신청 시 입력한 서비스 도메인에서 호출하지 않은 경우
 * 91 농사로 Open API 시스템의 오류가 발생한 경우 (계속 반복되면 농사로 시스템 관리자에게 문의하기 바랍니다)
 */

/**
 * apiKey: 인증키
 * sType: 검색조건
 *          1. sCntntsSj : 식물명
 *          2. sPlntbneNm : 학명
 *          3. sPlntzrNm : 영명
 * wordType: 자음구분
 *          1. cntntsSj : 국명(ㄱ,ㄴ,ㄷ,ㄹ ...)
 *          2. plntbneNm : 학명(A,B,C,D ...)
 * sText: 검색어
 * lightChkVal : 광도요구(055001,055002,055003)
 * grwhstleChkVal : 생육형태(054001~054006)
 * lefcolrChkVal : 잎색(069001~069007)
 * lefmrkChkVal : 잎무늬(070001~070004)
 * flclrChkVal : 꽃색(071001~071009)
 * fmldecolrChkVal : 열매색(081001~081009)
 * ignSeasonChkVal : 꽃피는 계절(073001~073004)
 * winterLwetChkVal : 겨울 최저온도(057001~057005)
 * priceType : 가격대 구분(big,medium,small)
 * priceTypeSel : 가격대(068001~068006)
 * waterCycleSel : 물주기(053001~053004)
 * pageNo: 페이징
 * numOfRows: 한 페이지에 제공할 건수
 */

export async function GET(req: NextRequest) {
    let query = `apiKey=${process.env.NEXT_PUBLIC_API_KEY}&sType=sCntntsSj`;
    const param = req.nextUrl.searchParams;
    param.forEach((value, key) => {
        query += `&${key}=${value}`;
    });

    let code = "";
    let message = "";
    let body;

    try {
        const url = `${process.env.NEXT_PUBLIC_GARDEN_LIST}?${query}`;

        await fetchWithTimeout(url, 5000)
            .then((response) => {
                if (response.ok) {
                    return response;
                } else {
                    code = "500";
                    message = "Data를 불러오는데 실패함.";
                    throw new Error("Request failed.");
                }
            })
            .then(async (response) => {
                const xmlData = await response.text();

                const data = await convertXmlToJson(xmlData);

                code = data.header.resultCode;
                message = data.header.resultMsg;
                if (code !== "00") throw new Error("에러발생");
                else {
                    const items = data.body.items;
                    if (Array.isArray(items.item)) {
                        body = items;
                    } else if (typeof items.item === "object" && items.item !== null) {
                        body = { ...items, item: [items.item] };
                    } else {
                        body = items;
                    }
                }
            })
            .catch((error) => {
                code = "300";
                message = "Timeout...";
                console.log(error);
            });
    } catch {
        code = "500";
        message = "Data를 불러오는데 실패함.";
    }

    return NextResponse.json({ code: code, message: message, data: body });
}
