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
        result: initResult(),
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
                that.result.set(that.proposedCombinations[i], that.secretCombination.get());
                console.writeln(`${i===9?'':' '}${i + 1} intento${i?'s':' '}: ` + 
                                `${that.proposedCombinations[i]} ----> ` +
                                `${that.result.getBlacks()} black${that.result.getBlacks()!==1?'s':' '} + ` + 
                                `${that.result.getWhites()} white${that.result.getWhites()!==1?'s':''}`);
            }
        },
        isOver() {
            if (that.proposedCombinations.length >= that.MAX_ATTEMPS) {
                return true;
            }
            return that.result.isWinner(that.secretCombination.get().length);
        },
        getGameOverMsg() {
            return that.result.isWinner(that.secretCombination.get().length)?`\n¡Has ganado!\n`:`\nHas perdido... ¡inténtalo de nuevo!\n`;
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
            } while (initColorChecker().isColorInArray(newColor, that.colors));
            return newColor;
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
                if (!initColorChecker().isColorInArray(color, that.COLOR_OPTIONS)) {
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
        }
    }
}

function initResult() {
    const that = {
        blacks: 0,
        whites: 0
    }
    return {
        getBlacks() {
            return that.blacks;
        },
        getWhites() {
            return that.whites;
        },
        isWinner(maxColors) {
            return that.blacks === maxColors;
        },
        set(playerColors, secretColors) {
            that.blacks = 0;
            that.whites = 0;
            for (let i = 0; i < playerColors.length; i++) {
                if (playerColors[i] === secretColors[i]) {
                    that.blacks++;
                } else if (initColorChecker().isColorInArray(playerColors[i], secretColors)) {
                    that.whites++;
                }
            }
        }
    }
}

function initColorChecker() {
    return {
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
        }
    }
}