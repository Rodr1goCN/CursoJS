export interface ControleRemoto {
    play(): void;
    pause(): void;
}

export interface ControleSom extends ControleRemoto {
    mudarRadio(): void;
}

export class Bluray implements ControleRemoto {
    pause(): void {}
    play(): void {}
}

export class Som implements ControleSom {
    mudarRadio(): void {}
    pause(): void {}
    play(): void {}
}