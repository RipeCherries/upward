(function() {
    this.UpWard = function() {
        const defaults = {
            position: "left",
            offset: 20,
            bottomOffset: 20,
            containerSize: 30,
            containerRadius: 10,
            containerClass: "upward-container",
            containerColor: "#000000",
            arrowClass: "upward-arrow",
            arrowColor: "#ffffff",
            alwaysVisible: false,
            trigger: 100,
            zIndex: 1
        };

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        this.init();
    };

    function extendDefaults(src, properties) {
        console.log(properties)
        if (properties.position !== "right" && properties.position !== "left") {
            src.position = "left";
        } else {
            src.position = properties.position;
        }

        if (properties.offset < 0) {
            src.offset = 0;
        } else {
            src.offset = properties.offset;
        }

        if (properties.bottomOffset < 0) {
            src.bottomOffset = 0;
        } else {
            src.bottomOffset = properties.bottomOffset;
        }

        if (properties.containerSize < 20) {
            src.containerSize = 20;
        } else {
            src.containerSize = properties.containerSize;
        }

        if (properties.containerRadius < 0) {
            src.containerRadius = 0;
        } else {
            src.containerRadius = properties.containerRadius;
        }

        const colorReg = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

        if (!colorReg.test(properties.containerColor)) {
            src.containerColor = "#000000";
        } else {
            src.containerColor = properties.containerColor;
        }

        if (!colorReg.test(properties.arrowColor)) {
            src.arrowColor = "#ffffff"
        } else {
            src.arrowColor = properties.arrowColor;
        }

        if (isNaN(properties.zIndex)) {
            src.zIndex = 1;
        } else {
            src.zIndex = properties.zIndex;
        }

        console.log(src);

        return src;
    }
    
    function fadeIn(element, ms) {
        element.style.opacity = 0;

        if (ms) {
            let opacity = 0;
            const timer = setInterval(function () {
                opacity += 50 / ms;

                if (opacity >= 1) {
                    clearInterval(timer);
                    opacity = 1;
                }

                element.style.opacity = opasity;
            }, 50);
        } else {
            element.style.opacity = 1;
        }
    }

    function fadeOut(element, ms) {
        if (ms) {
            element.style.transition = "opacity" + ms + "ms";
            element.addEventListener("transitionend", function(event) {
                element.style.display = "none";
            }, false);
        }

        element.style.opacity = 0;
    }

    UpWard.prototype.init = function () {
        const body = document.body;

        const container = document.createElement("div");
        container.classList.add(this.options.containerClass);

        const arrow = document.createElement("div");
        arrow.classList.add(this.options.arrowClass);

        container.appendChild(arrow);

        body.appendChild(container);

        /* --- container styles --- */
        container.style["position"] = "fixed";
        container.style["cursor"] = "pointer";
        container.style["width"] = this.options.containerSize + "px";
        container.style["height"] = this.options.containerSize + "px";
        container.style["borderRadius"] = this.options.containerRadius + "px";
        container.style["background"] = this.options.containerColor;
        container.style[this.options.position] = this.options.offset + "px";
        container.style["bottom"] = this.options.bottomOffset + "px";
        container.style["zIndex"] = this.options.zIndex;

        /* --- arrow styles --- */
        arrow.style["width"] = 0;
        arrow.style["height"] = 0;
        arrow.style["margin"] = "0 auto";
        arrow.style["paddingTop"] = Math.ceil(0.325 * this.options.containerSize) + "px";
        arrow.style["borderStyle"] = "solid";
        arrow.style["borderWidth"] = "0 " + (0.25 * this.options.containerSize) + "px " +
                                     (0.25 * this.options.containerSize) + "px " +
                                     (0.25 * this.options.containerSize) + "px";
        arrow.style["borderColor"] = "transparent transparent " + this.options.arrowColor + " transparent";

        container.addEventListener("click", function () {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        });
    };
}());