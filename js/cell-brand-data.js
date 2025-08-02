class CellBrandData extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Shadow DOM
    }

    connectedCallback() {
        const year = this.getAttribute('year') || '';
        const debt = new Intl.NumberFormat("us-US").format(this.getAttribute('debt') || '') + " Md$";
        const margin = this.getAttribute('margin') || '';
        const cars_sold = new Intl.NumberFormat("fr-FR", {
            maximumFractionDigits: 0
        }).format(this.getAttribute('cars_sold') || '');
 
        const turnover = new Intl.NumberFormat("us-US").format(this.getAttribute('turnover') || '') + " Md$";

        this.shadowRoot.innerHTML = `
            <style>
                .cellDatas {
                    display: flex;
                    flex-direction: column;
                    padding: 5px 30px;

                    p {
                        margin: 0;
                        line-height: 1.5rem;
                        color: #333;

                        &.debt {
                            color: #a80000;
                        }
                    }

                    .date {
                        margin-bottom: 10px;
                        span {
                            padding: 3px 10px;
                            font-size: .875rem;
                            font-weight: 700;
                            color: #333;
                            background-color: #ddd;
                            border-radius: 5px;
                        }
                    }
                }
            </style>
            <div class="cellDatas">
                <p class="date">
                    <span>${year}</span>
                </p>
                <p class="debt">
                    <b>Debt</b> : ${debt}
                </p>
                <p>
                    <b>Turnover</b> : ${turnover}
                </p>
                <p>
                    <b>Net margin</b> : ${margin}
                </p>
                <p>
                    <b>Cars sold</b>: ${cars_sold}
                </p>
            </div>
        `;
    }
}

customElements.define('cell-brand-data', CellBrandData);
