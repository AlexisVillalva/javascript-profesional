import MediaPlayer from "../MediaPlayer";

// auto pause utilizando intersectionObserver
class AutoPause {
    private threshold: number;
    private player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;
        // todos los plugins deben tener el metodo run
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });
        // player.media sera el eleemnto observado por el intersection observer

        observer.observe(this.player.media);

        // pause on visibility change
        document.addEventListener(
            "visibilitychange",
            this.handleVisibilityChange
        );
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        // entries son todos los objetos que estamos observando.
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }

    private handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        isVisible ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;
