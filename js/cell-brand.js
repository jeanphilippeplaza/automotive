class CellBrand extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Shadow DOM
    }

    connectedCallback() {
        const image = this.getAttribute('image') || '';
        const brand = this.getAttribute('brand') || '';
        const alt = this.getAttribute('alt') || '';

        this.shadowRoot.innerHTML = `
            <style>
                .cellBrand {
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    padding: 0;

                    p {
                        margin: 0;
                        line-height: 1.95rem;
                        color: #333;
                    }

                    &.logo {
                        width: 150px;
                        margin: 0;
                        padding: 0;
                        text-align: center;

                        img {
                            margin: 5px auto;
                            width: 64px;
                        }
                    }

                    a {
                        -webkit-transition: .3s all ease;
                        -o-transition: .3s all ease;
                        transition: .3s all ease;
                        color: #007bff;
                        text-decoration: none;
                    }

                    a:hover {
                        text-decoration: none;
                        color: #0056b3;
                    }
                }
            </style>
            <div class="cellBrand logo">
                <img
                    src="${image}"
                    alt="${alt}"
                     />
                <p>
                    <a href="#">${brand}</a>
                </p>
            </div>
        `;
    }
}

customElements.define('cell-brand', CellBrand);
