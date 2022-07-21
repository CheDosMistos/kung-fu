const { Console } = require("console-mpds");
const console = new Console();

initMastermind().play();

function initMastermind() {
    const that = {
        askYesOrNo(msg) {
            const answer = console.readString(`${msg} ("si/no"):`);
            if (answer!==`si` && answer!==`no`) {
                return that.askYesOrNo(`Debes seleccionar una de estas dos respuestas`);
            }
            return answer === `si`;
        }
    }

    return {
        play() {
            console.writeln(`----- MASTERMIND -----`);
            do {
                initGame().play();
            } while (that.askYesOrNo(`¿Quieres jugar de nuevo?`));
        }
    }
}

function initGame() {
    const that = {
        MAX_ATTEMPS: 10,
        proposedCombinations: [],
        playerCombination: initCombination(),
        secretCombination: initCombination(),
        askPlayerCombination() {
            do {
                that.playerCombination.set(console.readString(`\nPropón una combinación:`));
                if (that.playerCombination.getError() !== '') {
                    console.writeln(that.playerCombination.getError());
                }
            } while (that.playerCombination.getError() !== '');
            that.proposedCombinations[that.proposedCombinations.length] = that.playerCombination.get();
        },
        showAllProposedCombinations() {
            for (let i = 0; i < that.proposedCombinations.length; i++) {
                const results = that.secretCombination.getResult(that.proposedCombinations[i]);
                console.writeln(`${i===9?'':' '}${i + 1} intento${i?'s':' '}: ` + 
                                `${that.proposedCombinations[i]} ----> ` +
                                `${results.blacks} black${results.blacks!==1?'s':' '} + ` + 
                                `${results.whites} white${results.whites!==1?'s':''}`);
            }
        },
        isOver() {
            if (that.proposedCombinations.length >= that.MAX_ATTEMPS) {
                return true;
            }
            return that.secretCombination.isWinner(that.playerCombination.get());
        },
        getGameOverMsg() {
            return that.secretCombination.isWinner(that.playerCombination.get())?`\n¡Has ganado!\n`:`\nHas perdido... ¡inténtalo de nuevo!\n`;
        }
    }

    return {
        play() {
            that.secretCombination.generate();
            do {
                that.askPlayerCombination();
                that.showAllProposedCombinations();
            } while (!that.isOver());
            console.writeln(that.getGameOverMsg());
        }
    }
}

function initCombination() {
    const that = {
        colors: [],
        MAX_COLORS: 4,
        COLOR_OPTIONS: ['Q', 'W', 'E', 'R', 'T', 'Y'],
        getNewRandomColor() {
            let newColor;
            do {
                newColor = that.COLOR_OPTIONS[Math.floor(Math.random() * that.COLOR_OPTIONS.length)];
            } while (that.isColorInArray(newColor, that.colors));
            return newColor;
        },
        isColorInArray(newColor, colors) {
            if (colors === undefined) {
                return false;
            }
            for (const color of colors) {
                if (newColor === color) {
                    return true;
                }
            }
            return false;
        },
        hasRepeatedColor() {
            for (let i = 0; i < that.colors.length; i++) {
                for (let j = i+1; j < that.colors.length; j++) {
                    if (that.colors[i] === that.colors[j]) {
                        return true;
                    }
                }
            }
            return false;
        },
        areColorsInOptions() {
            for (const color of that.colors) {
                if (!that.isColorInArray(color, that.COLOR_OPTIONS)) {
                    return false;
                }
            }
            return true;
        }
    }

    return {
        set(colors) {
            that.colors = colors.split('');
        },
        get() {
            return that.colors;
        },
        generate() {
            do {
                that.colors[that.colors.length] = that.getNewRandomColor();
            } while (that.colors.length < that.MAX_COLORS);
        },
        getError() {
            if (that.colors.length !== that.MAX_COLORS) {
                return `La cantidad de colores ${that.colors.length} no es ${that.MAX_COLORS}`;
            }
            if (!that.areColorsInOptions()) {
                return `Hay colores que no pertnenecen al dominio. Opciones: ${that.COLOR_OPTIONS}`;
            }
            if (that.hasRepeatedColor()) {
                return `Hay colores repetidos`;
            }
            return ``;
        },
        isWinner(playerColors) {
            return this.getResult(playerColors).blacks === that.colors.length;
        },
        getResult(playerColors) {
            const totals = {blacks: 0, whites: 0};
            for (let i = 0; i < playerColors.length; i++) {
                if (playerColors[i] === that.colors[i]) {
                    totals.blacks++;
                } else if (that.isColorInArray(playerColors[i], that.colors)) {
                    totals.whites++;
                }
            }
            return totals;
        }
    }
}