import xml2js from "xml2js";

export async function convertXmlToJson(xmlString: string) {
    try {
        const parser = new xml2js.Parser({ explicitArray: false, explicitRoot: false });
        const result = await parser.parseStringPromise(xmlString);
        return result;
    } catch (error) {
        console.error("XML to JSON conversion error:", error);
        return null;
    }
}
