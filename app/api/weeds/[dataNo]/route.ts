import type { NextApiResponse } from "next";
import { convertXmlToJson } from "@/app/component/ConverXmlToJson";
import { fetchWithTimeout } from "@/app/util/util";
import { NextRequest, NextResponse } from "next/server";

/**
 * apiKey: 인증키
 * dataNo: 컨텐츠 번호
 */

export async function GET(req: NextRequest, { params }: { params: { dataNo: string } }, res: NextApiResponse<Result>) {
    const dataNo = params.dataNo;

    let code = "";
    let message = "";
    let body;
    try {
        const url = `${process.env.NEXT_PUBLIC_WEED_VIEW}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&dataNo=${dataNo}`;

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
                body = data.body.items.item;
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
