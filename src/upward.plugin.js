export default class UpWard {
    constructor(userSettings) {
        this.#setSettings();
        this.#extendSettings(userSettings);

        this.#setup();

        this.isDisplay = false;
    }

    #setSettings() {
        if (this.settings) {
            return;
        }

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
        return `
            <div class="upward-container" style="position: fixed; cursor: pointer; width: ${this.settings.containerSize}px; height: ${this.settings.containerSize}px; border-radius: ${this.settings.containerRadius}px; background: ${this.settings.containerColor}; ${this.settings.position}: ${this.settings.offset}px; bottom: ${this.settings.bottomOffset}px; z-index: ${this.settings.zIndex}; display: none;">
                <div class="upward-arrow" style="width: 0; height:0; margin: 0 auto; padding-top: ${Math.ceil(0.325 * this.settings.containerSize)}px; border-style: solid; border-width: 0 ${0.25 * this.settings.containerSize}px ${0.25 * this.settings.containerSize}px ${0.25 * this.settings.containerSize}px; border-color: transparent transparent ${this.settings.arrowColor} transparent;"></div>
            </div>
        `;
    }

    #setup() {
        document.body.innerHTML += this.#getMarkup();

        this.clickHandler = this.clickHandler.bind(this);
        document.querySelector(".upward-container").addEventListener("click", this.clickHandler);

        this.scrollHandler = this.scrollHandler.bind(this);
        if (!this.settings.alwaysVisible) {
            window.addEventListener("scroll", this.scrollHandler);
            return;
        }

        this.#fadeIn(document.querySelector(".upward-container"));
    }

    clickHandler() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    scrollHandler() {
        if (window.pageYOffset > this.settings.trigger) {
            if (!this.isDisplay) {
                this.isDisplay = true;
                this.#fadeIn(document.querySelector(".upward-container"), 1000);
            }
        } else {
            if (this.isDisplay) {
                this.isDisplay = false;
                this.#fadeOut(document.querySelector(".upward-container"), 1000);
            }
        }
    }

    #fadeIn(element, ms) {
        element.style["opacity"] = 0;
        element.style["display"] = "block";

        if (ms) {
            let opacity = 0;

            const timer = setInterval(function () {
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

    #fadeOut(element, ms) {
        if (ms) {
            element.style["transition"] = "opacity" + ms + "ms";
            element.addEventListener("transitionend", function (e) {
                element.style["display"] = "none";
            }, false);
        }

        element.style["opacity"] = 0;
    }
}