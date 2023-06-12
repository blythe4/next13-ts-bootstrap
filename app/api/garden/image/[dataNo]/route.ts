import type { NextApiResponse } from "next";
import { convertXmlToJson } from "@/app/component/ConverXmlToJson";
import { NextRequest, NextResponse } from "next/server";

/**
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
            `${process.env.NEXT_PUBLIC_GARDEN_FILE_LIST}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cntntsNo=${dataNo}`
        );
        const xmlData = await response.text();

        const data = await convertXmlToJson(xmlData);

        code = data.header.resultCode;
        message = data.header.resultMsg;
        const items = data.body.items;
        if (Array.isArray(items.item)) {
            body = items;
        } else if (typeof items.item === "object" && items.item !== null) {
            body = { ...items, item: [items.item] };
        } else {
            body = items;
        }
    } catch {
        code = "500";
        message = "Data를 불러오는데 실패함.";
    }

    return NextResponse.json({ code: code, message: message, data: body });
}
