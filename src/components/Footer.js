export function Footer() {
    return (
        <div className="footer">
            <FooterElement cls={"socials font icon"}>
                {{
                    github: [
                        <i className="bi bi-github"></i>,
                        "https://github.com/xKitsune47",
                    ],
                    ig: [
                        <i className="bi bi-instagram"></i>,
                        "https://github.com/xKitsune47",
                    ],
                    fb: [
                        <i className="bi bi-facebook"></i>,
                        "https://github.com/xKitsune47",
                    ],
                    twitter: [
                        <i className="bi bi-twitter-x"></i>,
                        "https://github.com/xKitsune47",
                    ],
                }}
            </FooterElement>
            <FooterElement cls={"faq font"}>
                {{
                    account: [
                        "Account",
                        "https://www.youtube.com/watch?v=LDU_Txk06tM",
                    ],
                    tos: [
                        "Terms of Service",
                        "https://www.youtube.com/watch?v=LDU_Txk06tM",
                    ],
                    shipping: [
                        "Shipping",
                        "https://www.youtube.com/watch?v=LDU_Txk06tM",
                    ],
                    payment: [
                        "Payments",
                        "https://www.youtube.com/watch?v=LDU_Txk06tM",
                    ],
                    returns: [
                        "Returns",
                        "https://www.youtube.com/watch?v=LDU_Txk06tM",
                    ],
                }}
            </FooterElement>
            <FooterElement cls={"account font"}>
                {{
                    telephone: ["123 456 789"],
                    mail: ["example@mail.pl"],
                    address: ["Wrocław, Poland"],
                }}
            </FooterElement>
        </div>
    );
}
function FooterElement({ cls, children }) {
    return (
        <div className={cls}>
            {Object.keys(children).map((key) => {
                return <Child element={children[key]} key={key} />;
            })}
        </div>
    );
}
function Child({ element }) {
    return (
        <span className="footer-element">
            {element[1] ? <a href={element[1]}>{element[0]}</a> : element[0]}
        </span>
    );
}
