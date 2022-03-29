import express from "express";
import {
    getEdit,
    watch,
    deleteVideo,
    upload,
    postEdit,
    getUpload,
    postUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);


export default videoRouter;
// : 이것은 파라미터 
// url 안에 변수를 포함할수있게 해준다.
//:이렇게 표시하는것은 express 에게 변수임을 알려줒기 위함이다.

//upload 를 id 보다 높게 두는 이유는 더 낮게 두면 upload를 id 로 인식하기 때문에
//왜냐 express 는 위에서부터 순서대로 읽기때문에 그렇다.w