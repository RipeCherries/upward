export class UpWard {
    constructor(userSettings) {
        this.#setSettings();
        this.#extendSettings(userSettings);

        this.container = this.#getMarkup();
        this.#setup();

        this.isDisplay = false;
    }

    #setSettings() {
        const defaultSettings = {
            position: "left",
            offset: 20,
            bottomOffset: 20,
            containerSize: 30,
            containerRadius: 10,
            containerColor: "#000000",
            arrowColor: "#ffffff",
            alwaysVisible: false,
            trigger: 100,
            zIndex: 1
        };

        if (this.settings) {
            return;
        }

        this.settings = defaultSettings;
    }

    #extendSettings(userSettings) {
        if (userSettings.position === "right" || userSettings.position === "left") {
            this.settings.position = userSettings.position;
        }

        if (userSettings.offset >= 0) {
            this.settings.offset = userSettings.offset;
        }

        if (userSettings.bottomOffset >= 0) {
            this.settings.bottomOffset = userSettings.bottomOffset;
        }

        if (userSettings.containerSize > 0) {
            this.settings.containerSize = userSettings.containerSize;
        }

        if (userSettings.containerRadius >= 0) {
            this.settings.containerRadius = userSettings.containerRadius;
        }

        if ((/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test(userSettings.containerColor)) {
            this.settings.containerColor = userSettings.containerColor;
        }

        if ((/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test(userSettings.arrowColor)) {
            this.settings.arrowColor = userSettings.arrowColor;
        }

        if (typeof userSettings.alwaysVisible === "boolean") {
            this.settings.alwaysVisible = userSettings.alwaysVisible;
        }

        if (userSettings.trigger >= 0) {
            this.settings.trigger = userSettings.trigger;
        }

        if (!isNaN(userSettings.zIndex)) {
            this.settings.zIndex = userSettings.zIndex;
        }
    }

    #getMarkup() {
        const container = document.createElement("div");
        const arrow = document.createElement("div");
    
        container.classList.add("upward-container");
        arrow.classList.add("upward-arrow");
    
        container.appendChild(arrow);

        container.style["position"] = "fixed";
        container.style["cursor"] = "pointer";
        container.style["width"] = this.settings.containerSize + "px";
        container.style["height"] = this.settings.containerSize + "px";
        container.style["borderRadius"] = this.settings.containerRadius + "px";
        container.style["background"] = this.settings.containerColor;
        container.style[this.settings.position] = this.settings.offset + "px";
        container.style["bottom"] = this.settings.bottomOffset + "px";
        container.style["zIndex"] = this.settings.zIndex;
        container.style["display"] = "none";

        arrow.style["width"] = 0;
        arrow.style["height"] = 0;
        arrow.style["margin"] = "0 auto";
        arrow.style["paddingTop"] = Math.ceil(0.325 * this.settings.containerSize) + "px";
        arrow.style["borderStyle"] = "solid";
        arrow.style["borderWidth"] = "0 " + (0.25 * this.settings.containerSize) + "px " +
                                     (0.25 * this.settings.containerSize) + "px " +
                                     (0.25 * this.settings.containerSize) + "px";
        arrow.style["borderColor"] = "transparent transparent " + this.settings.arrowColor + " transparent";
    
        return container;
    }

    #setup() {
        document.body.appendChild(this.container);

        this.clickHandler = this.clickHandler.bind(this);
        this.container.addEventListener("click", this.clickHandler);

        this.scrollHandler = this.scrollHandler.bind(this);
        if (!this.settings.alwaysVisible) {
            window.addEventListener("scroll", this.scrollHandler);
        } else {
            this.fadeIn(this.container);
        }
    }

    clickHandler() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    scrollHandler() {
        if (window.pageYOffset > this.settings.trigger) {
            if (!this.isDisplay) {
                this.isDisplay = true;
                this.fadeIn(this.container, 1000);
            }
        } else {
            if (this.isDisplay) {
                this.isDisplay = false;
                this.fadeOut(this.container, 1000);
            }
        }
    }

    fadeIn(element, ms) {
        element.style["opacity"] = 0;
        element.style["display"] = "block";
      
        if (ms) {
            let opacity = 0;
            
            const timer = setInterval(function() {
            opacity += 50 / ms;
            
            if (opacity >= 1) {
                clearInterval(timer);
                opacity = 1;
            }

            element.style["opacity"] = opacity;
          }, 50);
        } else {
          element.style["opacity"] = 1;
        }
    }

    fadeOut(element, ms) {
        if (ms) {
            element.style["transition"] = "opacity" + ms + "ms";
            element.addEventListener("transitionend", function(e) {
                element.style["display"] = "none";
            }, false);
        }

        element.style["opacity"] = 0;
    }
}