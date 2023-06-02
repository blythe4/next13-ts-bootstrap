import type { NextApiResponse } from "next";
import axios from "axios";
import { convertXmlToJson } from "@/app/component/ConverXmlToJson";
import { NextRequest, NextResponse } from "next/server";

/**
 * 잡초 상세
 * http://api.nongsaro.go.kr/service/weedsInfo/weedsInfoView
 * apiKey: 인증키
 * dataNo: 컨텐츠 번호
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
        params: { dataNo: string };
    },
    res: NextApiResponse<Result>
) {
    const dataNo = params.dataNo;

    let code = "";
    let message = "";
    let body;
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_WEED_VIEW}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&dataNo=${dataNo}`
        );
        const xmlData = await response.text();

        const data = await convertXmlToJson(xmlData);

        code = data.header.resultCode;
        message = data.header.resultMsg;
        body = data.body.items.item;
    } catch {
        code = "500";
        message = "Data를 불러오는데 실패함.";
    }

    return NextResponse.json({ code: code, message: message, data: body });
}
