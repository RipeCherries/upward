import { UpWard } from "./src/upward.plugin";

const upward = new UpWard({
    position: "right",
    offset: 20,
    bottomOffset: 20,
    containerSize: 80,
    containerRadius: 15,
    containerColor: "#000",
    arrowColor: "#fff",
    alwaysVisible: false,
    trigger: 500
});

window.u = upward;