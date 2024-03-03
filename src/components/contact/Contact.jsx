import React from "react";
import {
  Button,
  ContactContainer,
  FormInput,
  FormLabel,
  MainForm,
  MainHead,
  MainWrapper,
} from "./ContactStyles";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <MainForm>
          <MainWrapper>
            <MainHead>Tracking From</MainHead>
            <form class="form-wrapper">
              <div class="form-card">
                <FormInput
                  class="form-input"
                  type="text"
                  name="full_name"
                  required="required"
                />
                <FormLabel htmlfor="full_name">Tracking No</FormLabel>
              </div>
              <div class="btn-wrap">
                <Button> Submit </Button>
              </div>
            </form>
          </MainWrapper>
          <MainWrapper>
            <MainHead class="form-head">Calculate From</MainHead>
            <form class="form-wrapper">
              <div class="form-card">
                <FormInput
                  class="form-input"
                  type="text"
                  name="full_name"
                  required="required"
                />
                <FormLabel>Length</FormLabel>
              </div>
              <div class="form-card">
                <FormInput
                  class="form-input"
                  type="text"
                  name="full_name"
                  required="required"
                />
                <FormLabel>Width</FormLabel>
              </div>
              <div class="form-card">
                <FormInput
                  class="form-input"
                  type="text"
                  name="full_name"
                  required="required"
                />
                <FormLabel>Height</FormLabel>
              </div>
              <div class="btn-wrap">
                <Button> Calculate </Button>
              </div>
            </form>
          </MainWrapper>
        </MainForm>
      </ContactContainer>
    </>
  );
};

export default Contact;
