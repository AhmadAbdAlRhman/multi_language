import "./App.css";
import { useTranslation } from "react-i18next";
const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <button onClick={() => changeLanguage("ar")}>Arabic</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("tr")}>Turkish</button>
      <div className="privacyPolicy">
        <h1 id="H1privacy">{t("Title")}</h1>
        <h6 id="pprivacy">{t("SubTitle")}</h6>
        <p className="text1">{t("p1")}</p>
        <h2>{t("Subtitle1")}</h2>
        <p className="text1">{t("p2")}</p>
        <p className="text1">{t("p3")} </p>
        <p className="text1">{t("p4")}</p>
        <p className="text1">{t("p5")}</p>
        <h2>{t("Subtitle2")}</h2>
        <p className="text1">{t("p6")}</p>
        <h2>{t("Subtitle3")}</h2>
        <p className="text1">{t("p7")}</p>
        <h2>{t("Subtitle4")}</h2>
        <p className="text1">{t("p8")}</p>
        <h2>{t("Subtitle5")}</h2>
        <p className="text1">{t("p9")}</p>
      </div>
    </div>
  );
};
export default App;
