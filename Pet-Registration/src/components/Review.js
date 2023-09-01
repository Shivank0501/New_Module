/*import {
  Card,
  CardHeader,
  CardSubHeader,
  CardText,
  CheckBox,
  LinkButton,
  Row,
  StatusTable,
  SubmitBar
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Timeline from './Timeline';        // this is my timeline (my design)

/*const ActionButton = ({ jumpTo }) => {
  const { t } = useTranslation();
  const history = useHistory();
  function routeTo() {
    history.push(jumpTo);
  }

  return <LinkButton label={t("CS_COMMON_CHANGE")} className="check-page-link-button" onClick={routeTo} />;
};

const CheckPage = ({ onSubmit, value = {} }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const {
    address,
    isResdential,
    PropertyType,
    noOfFloors,
    noOofBasements,
    units = [{}],
    landarea,
    landArea,
    UnOccupiedArea,
    city_complaint,
    locality_complaint,
    street,
    doorNo,
    landmark,
    ownerType,
    Floorno,
    ownershipCategory,
    Constructiondetails,
    IsAnyPartOfThisFloorUnOccupied,
    propertyArea,
    selfOccupied,
    floordetails,
    owners,
    isEditProperty,
    isUpdateProperty,
  } = value;
  const typeOfApplication = !isEditProperty && !isUpdateProperty ? `new-application` : `edit-application`;
  let flatplotsize;
  if (isPropertyselfoccupied(selfOccupied?.i18nKey)) {
    flatplotsize = parseInt(landarea?.floorarea);
    if (ispropertyunoccupied(IsAnyPartOfThisFloorUnOccupied?.i18nKey)) {
      flatplotsize = flatplotsize + parseInt(UnOccupiedArea?.UnOccupiedArea);
    }
  } else {
    flatplotsize = parseInt(landarea?.floorarea) + parseInt(Constructiondetails?.RentArea);
    if (!ispropertyunoccupied(IsAnyPartOfThisFloorUnOccupied?.i18nKey)) {
      flatplotsize = flatplotsize + parseInt(UnOccupiedArea?.UnOccupiedArea);
    }
  }
  if (isPropertyIndependent(PropertyType?.i18nKey)) {
    flatplotsize = parseInt(propertyArea?.builtUpArea) + parseInt(propertyArea?.plotSize);
  }

  const [agree, setAgree] = useState(false);
  const setdeclarationhandler = () => {
    setAgree(!agree);
  };
  return (
    <React.Fragment>
     {window.location.href.includes("/citizen") ? <Timeline currentStep={4}/> : null}
    <Card>
      <CardHeader>{t("PT_CHECK_CHECK_YOUR_ANSWERS")}</CardHeader>
      <div>
        <CardText>{t("PT_CHECK_CHECK_YOUR_ANSWERS_TEXT")}</CardText>
        <CardSubHeader>{t("PT_PROPERTY_ADDRESS_SUB_HEADER")}</CardSubHeader>
        <StatusTable>
          <Row
            label={t("PT_PROPERTY_ADDRESS_SUB_HEADER")}
            text={`${address?.doorNo ? `${address?.doorNo}, ` : ""} ${address?.street ? `${address?.street}, ` : ""}${
              address?.landmark ? `${address?.landmark}, ` : ""
            }${t(address?.locality.code)}, ${t(address?.city.code)},${t(address?.pincode) ? `${address.pincode}` : " "}`}
            actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/pincode`} />}
          />
          <Row
            label={t("PT_PROOF_OF_ADDRESS_SUB_HEADER")}
            text={`${(address?.documents?.ProofOfAddress?.name && getFixedFilename(address.documents.ProofOfAddress.name)) || "na"}`}
            actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/proof`} />}
          />
        </StatusTable>
        <CardSubHeader>{t("PT_OWNERSHIP_DETAILS_SUB_HEADER")}</CardSubHeader>
        <StatusTable>
          <Row
            label={t("PT_FORM3_OWNERSHIP_TYPE")}
            text={t(checkForNA(`PT_OWNERSHIP_${ownershipCategory?.code}`))}
            actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/owner-ship-details@0`} />}
          />
        </StatusTable>
        <div>
          {owners &&
            owners.map &&
            owners.map((owner, index) => (
              <div key={index}>
                {owners.length != 1 && (
                  <CardSubHeader>
                    {t("PT_OWNER_SUB_HEADER")} - {index + 1}
                  </CardSubHeader>
                )}
                {ownershipCategory?.value == "INSTITUTIONALPRIVATE" || ownershipCategory?.value == "INSTITUTIONALGOVERNMENT" ? (
                  <div>
                    <StatusTable>
                      <Row
                        label={t("PT_COMMON_INSTITUTION_NAME")}
                        text={`${t(checkForNA(owner?.inistitutionName))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/inistitution-details/`}${index}`} />
                        }
                      />
                      <Row
                        label={t("PT_TYPE_OF_INSTITUTION")}
                        text={`${t(checkForNA(owner?.inistitutetype?.code))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/inistitution-details/`}${index}`} />
                        }
                      />
                      <Row
                        label={t("PT_OWNER_NAME")}
                        text={`${t(checkForNA(owner?.name))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/inistitution-details/`}${index}`} />
                        }
                      />
                      <Row
                        label={`${t("PT_COMMON_AUTHORISED_PERSON_DESIGNATION")}`}
                        text={`${t(checkForNA(owner?.designation))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/inistitution-details/`}${index}`} />
                        }
                      />
                      <Row
                        label={`${t("PT_FORM3_MOBILE_NUMBER")}`}
                        text={`${t(checkForNA(owner?.mobileNumber))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/inistitution-details/`}${index}`} />
                        }
                      />
                      <Row
                        label={`${t("PT_OWNERSHIP_INFO_TEL_PHONE_NO")}`}
                        text={`${t(checkForNA(owner?.altContactNumber))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/inistitution-details/`}${index}`} />
                        }
                      />
                      <Row
                        label={`${t("PT_FORM3_EMAIL_ID")}`}
                        text={`${t(checkForNA(owner?.emailId))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/inistitution-details/`}${index}`} />
                        }
                      />
                      <Row
                        label={`${t("PT_OWNERSHIP_INFO_CORR_ADDR")}`}
                        text={`${t(checkForNA(owner?.permanentAddress))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/institutional-owner-address/`}${index}`} />
                        }
                      />
                      <Row
                        label={`${t("PT_COMMON_SAME_AS_PROPERTY_ADDRESS")}`}
                        text={`${t(checkForNA(owner?.isCorrespondenceAddress))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/institutional-owner-address/`}${index}`} />
                        }
                      />
                      <Row
                        label={t("PT_PROOF_IDENTITY_HEADER")}
                        text={`${(owner?.documents["proofIdentity"]?.name && getFixedFilename(owner.documents["proofIdentity"].name)) || "na"}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/institutional-proof-of-identity/`}${index}`} />
                        }
                      />
                    </StatusTable>
                  </div>
                ) : (
                  <div>
                    <StatusTable>
                      <Row
                        label={t("PT_OWNER_NAME")}
                        text={`${t(checkForNA(owner?.name))}`}
                        actionButton={<ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/owner-details/`}${index}`} />}
                      />
                      <Row
                        label={t("PT_FORM3_GENDER")}
                        text={`${t(checkForNA(owner?.gender?.code))}`}
                        actionButton={<ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/owner-details/`}${index}`} />}
                      />
                      <Row
                        label={`${t("PT_FORM3_MOBILE_NUMBER")}`}
                        text={`${t(checkForNA(owner?.mobileNumber))}`}
                        actionButton={<ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/owner-details/`}${index}`} />}
                      />
                      <Row
                        label={t("PT_FORM3_GUARDIAN_NAME")}
                        text={`${t(checkForNA(owner?.fatherOrHusbandName))}`}
                        actionButton={<ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/owner-details/`}${index}`} />}
                      />
                      <Row
                        label={t("PT_FORM3_RELATIONSHIP")}
                        text={`${t(checkForNA(owner?.relationship?.code))}`}
                        actionButton={<ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/owner-details/`}${index}`} />}
                      />
                      <Row
                        label={t("PT_SPECIAL_OWNER_CATEGORY")}
                        text={`${t(checkForNA(owner?.ownerType?.code))}`}
                        actionButton={
                          <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/special-owner-category/`}${index}`} />
                        }
                      />
                      <Row
                        label={`${t("PT_OWNERS_ADDRESS")}`}
                        text={`${t(checkForNA(owner?.permanentAddress))}`}
                        actionButton={<ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/owner-address/`}${index}`} />}
                      />
                      <Row
                        label={`${t("PT_COMMON_SAME_AS_PROPERTY_ADDRESS")}`}
                        text={`${t(checkForNA(owner?.isCorrespondenceAddress))}`}
                        actionButton={<ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/owner-address/`}${index}`} />}
                      />
                      {owner?.ownerType?.code !== "NONE" ? (
                        <Row
                          label={t("PT_SPECIAL_OWNER_CATEGORY_PROOF_HEADER")}
                          text={`${
                            (owner?.documents["specialProofIdentity"]?.name && getFixedFilename(owner.documents["specialProofIdentity"].name)) || "na"
                          }`}
                          actionButton={
                            <ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/special-owner-category-proof/`}${index}`} />
                          }
                        />
                      ) : (
                        ""
                      )}
                      <Row
                        label={t("PT_PROOF_IDENTITY_HEADER")}
                        text={`${(owner?.documents["proofIdentity"]?.name && getFixedFilename(owner.documents["proofIdentity"].name)) || "na"}`}
                        actionButton={<ActionButton jumpTo={`${`/digit-ui/citizen/pt/property/${typeOfApplication}/proof-of-identity/`}${index}`} />}
                      />
                    </StatusTable>
                  </div>
                )}
              </div>
            ))}
        </div>
        <CardSubHeader>{t("PT_ASSESMENT_INFO_SUB_HEADER")}</CardSubHeader>
        <StatusTable>
          {/* <Row
            label={t("PT_RESIDENTIAL_PROP_LABEL")}
            text={`${t(checkForNA(isResdential?.i18nKey))}`}
            actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/isResidential`} />}
          /> *}/*
          <Row
            label={t("PT_ASSESMENT1_PROPERTY_TYPE")}
            text={`${t(checkForNA(PropertyType?.i18nKey))}`}
            actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/property-type`} />}
          />
          {PropertyType?.code !== "VACANT" &&<Row
            label={t("PT_ASSESMENT1_PLOT_SIZE")}
            text={`${landArea?.floorarea}`}
            actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/landarea`} />}
          />}
          {PropertyType?.code === "VACANT" && (
            <Row
              label={t("PT_ASSESMENT1_PLOT_SIZE")}
              text={`${landarea?.floorarea}`}
              actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/PtUnits`} />}
            />
          )}
          {PropertyType?.code !== "VACANT" &&
            units
              .sort((x, y) => x.floorNo - y.floorNo)
              .map((unit, unitIndex) => {
                return (
                  <div>
                    {units.length > 1 && <CardSubHeader>{t(`PT_UNIT`)}-{unitIndex}</CardSubHeader>}
                    <Row
                      label={t("PT_BUILT_UP_AREA")}
                      text={`${unit?.constructionDetail?.builtUpArea}`}
                      actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/PtUnits`} />}
                    />
                    <Row
                      label={t("PT_ASSESMENT_INFO_OCCUPLANCY")}
                      text={t(`PROPERTYTAX_OCCUPANCYTYPE_${unit?.occupancyType}`)}
                      actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/PtUnits`} />}
                    />
                    <Row
                      label={t("PT_FORM2_USAGE_TYPE")}
                      text={t(
                        `PROPERTYTAX_BILLING_SLAB_${
                          unit?.usageCategory?.split(".").length > 2 ? unit?.usageCategory?.split(".")[1] : unit?.usageCategory?.split(".")[0]
                        }`
                      )}
                      actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/PtUnits`} />}
                    />{" "}
                    {unit?.unitType && (
                      <Row
                        label={t("PT_FORM2_SUB_USAGE_TYPE")}
                        text={t(`PROPERTYTAX_BILLING_SLAB_${unit?.unitType}`)}
                        actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/PtUnits`} />}
                      />
                    )}
                    <Row
                      label={t("PT_FLOOR_NO")}
                      text={`${unit?.floorNo}`}
                      actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/PtUnits`} />}
                    />
                    {unit?.arv && (
                      <Row
                        label={t("PT_PROPERTY_ANNUAL_RENT_LABEL")}
                        text={`${unit?.arv}`}
                        actionButton={<ActionButton jumpTo={`/digit-ui/citizen/pt/property/${typeOfApplication}/PtUnits`} />}
                      />
                    )}
                  </div>
                );
              })}
          {}
        </StatusTable>
        <CheckBox
          label={t("PT_FINAL_DECLARATION_MESSAGE")}
          onChange={setdeclarationhandler}
          styles={{ height: "auto" }}
          //disabled={!agree}
        />
      </div>
      <SubmitBar label={t("PT_COMMON_BUTTON_SUBMIT")} onSubmit={onSubmit} disabled={!agree} />
    </Card>
   </React.Fragment>
  );
};

export default CheckPage;*/