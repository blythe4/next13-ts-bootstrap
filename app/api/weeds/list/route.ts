import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { convertXmlToJson } from "@/app/component/ConverXmlToJson";
import { NextRequest, NextResponse } from "next/server";

/**
 * 잡초 목록
 * http://api.nongsaro.go.kr/service/weedsInfo/weedsInfoList
 * apiKey: 인증키
 * sType: 검색조건
 *          1. sWeedsFmlNm : 과명
 *          2. sKlangNm : 국명
 *          3. sScnm : 학명
 * sText: 검색단어
 * pageNo: 페이징
 * numOfRows: 한 페이지에 제공할 건수
 */

type Result = {
    code: string;
    message: string;
    data?: any;
};

export async function GET(
    req: NextRequest,
    {
        params,
    }: {
        params: { sType: string; sText: string; pageNo: string; numOfRows: string };
    },
    res: NextApiResponse<Result>
) {
    let query = `apiKey=${process.env.NEXT_PUBLIC_API_KEY}&sType=sKlangNm`;
    const param = req.nextUrl.searchParams;
    param.forEach((value, key) => {
        query += `&${key}=${value}`;
    });

    let code = "";
    let message = "";
    let body;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WEED_LIST}?${query}`);
        const xmlData = await response.text();

        const data = await convertXmlToJson(xmlData);

        code = data.header.resultCode;
        message = data.header.resultMsg;
        /**
         * 00 정상적으로 처리된 경우 (검색조건이 잘못되어 조회데이터가 없는 경우도 해당됩니다)
         * 11 인증키를 입력하지 않았거나 발급받은 인증키를 사용하지 않은 경우
         * 12 발급받은 인증키를 사용하였으나 농사로 관리자에 의해 일시 중지된 경우 (농사로 시스템 관리자에게 문의하기 바랍니다)
         * 13 농사로에서 제공하는 서비스 및 오퍼레이션이 아닌 경우
         * 15 AJAX 방식의 경우 Open API 신청 시 입력한 서비스 도메인에서 호출하지 않은 경우
         * 91 농사로 Open API 시스템의 오류가 발생한 경우 (계속 반복되면 농사로 시스템 관리자에게 문의하기 바랍니다)
         */
        if (code !== "00") throw new Error("에러발생");
        else body = data.body.items;
    } catch {
        code = "500";
        message = "Data를 불러오는데 실패함.";
    }

    return NextResponse.json({ code: code, message: message, data: body });
}
