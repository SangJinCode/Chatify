import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);

        //req가 거부된 경우 이유를 확인
        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
            } else if (decision.reason.isBot()) {
                return res.status(403).json({ message: "Bot access denied." });
            } else {
                return res.status(403).json({message: "Access denied by security policy.",});
            }
        }


        //“decision.results 배열 중 하나라도 스푸핑된 봇으로 감지되면, 요청을 차단하고 클라이언트에게 403 Forbidden 응답을 보내라”
        //decision.results은 여러 개의 보안 검증 결과를 담은 배열
        //some()은 배열의 요소 중 하나라도 조건(callback)이 true이면 true 반환
        //배열 중 하나라도 ‘스푸핑된 봇’으로 의심되면 true
        if (decision.results.some(isSpoofedBot)) {
            return res.status(403).json({
                error: "Spoofed bot detected",
                message: "Malicious bot activity detected.",
            });
        }

        next();
    } catch (error) {
        console.log("Arcjet protection Error:", error);
        next()
    }

}