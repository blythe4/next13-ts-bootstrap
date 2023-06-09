import type { NextApiResponse } from "next";
import { convertXmlToJson } from "@/app/component/ConverXmlToJson";
import { NextRequest, NextResponse } from "next/server";
import { fetchWithTimeout } from "@/app/util/util";

/**
 * apiKey: 인증키
 * dataNo: 컨텐츠 번호
 */

export async function GET(req: NextRequest, { params }: { params: { dataNo: string } }, res: NextApiResponse<Result>) {
    const dataNo = params.dataNo;
    const url = `${process.env.NEXT_PUBLIC_THERPY_VIEW}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cntntsNo=${dataNo}`;

    let code = "";
    let message = "";
    let body;
    try {
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
                body = data.body.item;
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
