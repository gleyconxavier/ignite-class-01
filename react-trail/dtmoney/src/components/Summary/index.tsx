import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import {Container} from './styles';

import {TransactionsContext} from '../../TransactionsContext';
import {useContext} from "react";

export function Summary() {
    const data = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                </header>
                <strong>R$ 1.000,00</strong>
            </div>

        </Container>
    )
};
