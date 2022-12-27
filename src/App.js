import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [agreementScrolled, setAgreementScrolled] = useState(false);
  const agreementHtmlRef = useRef();

  const trackScrolling = (e) => {
    const element = agreementHtmlRef.current,
      bodyContainer = element.contentDocument.body.children[0],
      diff =
        Math.floor(bodyContainer.scrollHeight) -
        Math.ceil(bodyContainer.scrollTop);

    if (diff <= bodyContainer.clientHeight) {
      setAgreementScrolled(true);
    } else {
      setAgreementScrolled(false);
    }
  };

  const handleReset = () => {
    const element = agreementHtmlRef.current,
      bodyContainer = element.contentDocument.body.children[0];
    if (bodyContainer) {
      bodyContainer.scrollTo(0, 0);
      setAgreementScrolled(false);
    }
  };

  const onLoad = () => {
    const element = agreementHtmlRef.current;
    element.contentDocument.body.children[0].addEventListener(
      "scroll",
      trackScrolling
    );
  };

  return (
    <div className="container app-container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">React Iframe</h5>
              <iframe
                title="Agreement"
                className="pdf__wrapper"
                srcDoc='<!DOCTYPE html>
<html><head><title>Agreement</title></head><body><div style="height:400px;width:auto;overflow-y:scroll;overflow-x:hidden;">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div></body></html>'
                ref={agreementHtmlRef}
                onLoad={onLoad}
              ></iframe>
              <div className="row">
                <div className="col-12 d-flex justify-content-between">
                  <div>
                    <button
                      type="button"
                      className="btn btn-success"
                      disabled={!agreementScrolled}
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    {agreementScrolled && (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={handleReset}
                      >
                        scroll to top
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
