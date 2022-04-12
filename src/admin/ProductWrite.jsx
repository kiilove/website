import {
  Autocomplete,
  Button,
  createFilterOptions,
  Divider,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, { useEffect, useReducer, useRef, useState } from "react";
import styled from "styled-components";
import { ItemBox, ItemRow } from "../styles/Commons";
import { Typotext } from "../styles/Typotext";

import {
  grey,
  blueGrey,
  lightBlue,
  orange,
  lightGreen,
  red,
  green,
} from "@mui/material/colors";
import ImageUploading from "react-images-uploading";
import { ProductCategories } from "../data";
import { productReducer } from "../components/reducer/Product";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 30px 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const TitleRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin-bottom: 20px;
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 5px;
`;

const BodyRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const InputTitle = styled.div`
  display: flex;
  height: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  flex: 1;
  background-color: ${grey[100]};
  align-items: center;
  justify-content: flex-start;
`;

const InputForm = styled.div`
  display: flex;
  height: 100%;
  flex: 4;
  padding: 0px 20px;
  align-items: center;
`;

const ImgFileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const ImgFileWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  justify-content: center;
`;

const ImgFileRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const ImgDragBox = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${grey[500]};
  cursor: pointer;
  background-color: whitesmoke;
`;

const ActionButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.variant === "secondary"
      ? `1px dashed ${orange[700]}`
      : `1px dashed ${lightBlue[700]}`};

  cursor: pointer;
  background-color: whitesmoke;
`;

const ImgPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const ImgPreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
  gap: 10px;
`;

const ImgPreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${grey[300]};
`;

const ImgPreviewItem = styled.img`
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  height: 100px;
`;

const ImgPreviewAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 20px;
  box-sizing: border-box;
  padding: 3px;
  gap: 2px;
`;

const SpecListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SpecListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const SpecListRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid ${grey[100]};
`;

const InputText = styled.input`
  border: 1px solid ${grey[200]};
  border-radius: 5px;
  padding: 5px;
  outline: none;
  height: 25px;
  width: 30%;
  font-size: 13px;

  &:focus {
    border: 1px solid ${lightBlue[800]};
  }
`;

const OptionListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid ${green[200]};
  border-radius: 5px;
`;
const OptionListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 5px;
`;

const OptionListRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
`;

const initState = {
  img: [],
  color: [],
  bigCategory: "",
  category: "",
  modelName: "",
  modelCode: "",
  price: 0,
  specs: [],
  options: [],
};

const filter = createFilterOptions();

const ProductWrite = () => {
  const [state, dispatch] = useReducer(productReducer, initState);
  const [price, setPrice] = useState(0);
  const [optionPrice, setOptionPrice] = useState([]);

  const [images, setimages] = useState([]);

  const [optionWindow, setOptionWindow] = useState(false);
  const [specWindow, setSpecWindow] = useState(false);
  const [dummy, setDummy] = useState(true);

  const optionPriceRef = useRef([]);

  useEffect(() => {
    console.log(state);
  }, [state, dummy]);

  const MaxImgCount = 100;

  const ImgUploadingChange = (imgList, addUpdateIndex) => {
    console.log(imgList, addUpdateIndex);
    setimages(imgList);
  };

  const handlePriceNumber = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const controledValue = value.replaceAll(",", "");
    dispatch({
      type: "INPUT_UPDATE",
      payload: { keys: name, value: controledValue },
    });
    setPrice(controledValue);
  };

  const handleOptionPriceNumber = (e, gIdx, iIdx) => {
    e.preventDefault();
    const { name, value } = e.target;
    const controledValue = value.replaceAll(",", "");

    setOptionPrice((optionPrice[gIdx] = controledValue));
  };

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <TitleWrapper>
            <TitleRow>
              <ItemBox>
                <Typotext size="20px">제품등록</Typotext>
                <button onClick={() => console.log(state)}></button>
              </ItemBox>
            </TitleRow>
          </TitleWrapper>
        </TitleContainer>
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <Divider />
        </div>
        <BodyContainer>
          <BodyWrapper>
            <BodyRow style={{ height: "150px", minHeight: "150px" }}>
              <InputTitle>제품사진</InputTitle>
              <InputForm
                style={{
                  height: "150px",
                  flex: 4,
                  alignItems: "center",
                }}
              >
                <ImageUploading
                  multiple
                  value={images}
                  onChange={ImgUploadingChange}
                  maxNumber={MaxImgCount}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    <ImgFileContainer>
                      <ImgFileWrapper>
                        <ImgFileRow
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <ItemBox
                            style={{
                              flex: 1,
                              justifyContent: "flex-start",
                              alignItems: "center",
                              height: "100%",
                            }}
                          >
                            <ImgDragBox
                              id="imgboxbutton"
                              onClick={onImageUpload}
                              {...dragProps}
                            >
                              <Typotext
                                size="14px"
                                style={{
                                  color: blueGrey[800],
                                  fontWeight: 500,
                                }}
                              >
                                Click or Drag&Drop
                              </Typotext>
                            </ImgDragBox>
                          </ItemBox>
                          <ItemBox
                            style={{
                              flex: 4,
                              justifyContent: "flex-start",
                              alignItems: "center",
                              height: "100%",
                            }}
                          >
                            <ImgPreviewContainer>
                              <ImgPreviewWrapper>
                                {images.map((item, index) => (
                                  <ImgPreviewBox key={index}>
                                    <ImgPreviewItem src={item["data_url"]} />
                                    <ImgPreviewAction>
                                      <ActionButton
                                        onClick={() => onImageUpdate(index)}
                                      >
                                        <Typotext
                                          size="11px"
                                          style={{
                                            color: lightBlue[900],
                                            fontWeight: 300,
                                          }}
                                        >
                                          수정
                                        </Typotext>
                                      </ActionButton>
                                      <ActionButton
                                        variant="secondary"
                                        onClick={() => onImageRemove(index)}
                                      >
                                        <Typotext
                                          size="11px"
                                          style={{
                                            color: orange[900],
                                            fontWeight: 300,
                                          }}
                                        >
                                          삭제
                                        </Typotext>
                                      </ActionButton>
                                    </ImgPreviewAction>
                                  </ImgPreviewBox>
                                ))}
                              </ImgPreviewWrapper>
                            </ImgPreviewContainer>
                          </ItemBox>
                        </ImgFileRow>
                      </ImgFileWrapper>
                    </ImgFileContainer>
                  )}
                </ImageUploading>
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">제품카테고리(LG 노트북)</Typotext>
              </InputTitle>
              <InputForm style={{ flex: 4 }}>
                <InputText
                  autoComplete="new-password"
                  name="bigCategory"
                  style={{ width: "50%" }}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    dispatch({
                      type: "INPUT_UPDATE",
                      payload: { keys: name, value: value },
                    });
                  }}
                />
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">모델카테고리(gram_15_22H1)</Typotext>
              </InputTitle>
              <InputForm>
                <InputText
                  autoComplete="new-password"
                  name="category"
                  style={{ width: "50%" }}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    dispatch({
                      type: "INPUT_UPDATE",
                      payload: { keys: name, value: value },
                    });
                  }}
                />
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">제품명(15인치 그램 2022년)</Typotext>
              </InputTitle>
              <InputForm>
                <InputText
                  autoComplete="new-password"
                  name="modelName"
                  style={{ width: "50%" }}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    dispatch({
                      type: "INPUT_UPDATE",
                      payload: { keys: name, value: value },
                    });
                  }}
                />
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">모델코드(LG 15Z95N)</Typotext>
              </InputTitle>
              <InputForm>
                <InputText
                  autoComplete="new-password"
                  name="modelCode"
                  style={{ width: "50%" }}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    dispatch({
                      type: "INPUT_UPDATE",
                      payload: { keys: name, value: value },
                    });
                  }}
                />
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">가격</Typotext>
              </InputTitle>
              <InputForm>
                <InputText
                  autoComplete="new-password"
                  name="price"
                  style={{ width: "50%", textAlign: "right" }}
                  value={new Intl.NumberFormat().format(price)}
                  onChange={(e) => {
                    handlePriceNumber(e);
                  }}
                />
              </InputForm>
            </BodyRow>
          </BodyWrapper>
        </BodyContainer>
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <Divider />
        </div>
        <BodyContainer>
          <BodyWrapper>
            <BodyRow>
              <InputTitle>스펙</InputTitle>
              <InputForm>
                <ItemBox
                  style={{
                    flex: 1,
                    padding: "10px",
                    boxSizing: "border-box",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => {
                      dispatch({ type: "SPECS_ADD" });
                      setDummy(!dummy);
                    }}
                  >
                    스펙 항목 추가
                  </Button>
                  <Button variant="outlined" color="primary" size="small">
                    미리보기
                  </Button>
                </ItemBox>
              </InputForm>
            </BodyRow>
            {state.specs &&
              state.specs.map((spec, sIdx) => (
                <BodyRow>
                  <InputTitle>스펙 {sIdx + 1}</InputTitle>
                  <InputForm>
                    <SpecListContainer>
                      <SpecListWrapper>
                        <SpecListRow>
                          <ItemBox
                            style={{
                              flex: 1,
                              alignItems: "center",
                              justifyContent: "flex-start",
                              gap: "10px",
                            }}
                          >
                            <InputText
                              name="title"
                              style={{ height: "15px" }}
                              value={state.specs[sIdx].title}
                              onChange={(e) => {
                                const { name, value } = e.target;
                                dispatch({
                                  type: "SPECS_UPDATE",
                                  payload: { sIdx, keys: name, value },
                                });
                                setDummy(!dummy);
                              }}
                            />
                            <InputText
                              name="titleComment"
                              style={{ height: "15px" }}
                              value={state.specs[sIdx].titleComment}
                              onChange={(e) => {
                                const { name, value } = e.target;
                                sIdx === 0
                                  ? dispatch({
                                      type: "SPECS_UPDATE",
                                      payload: {
                                        sIdx,
                                        keys: name,
                                        value,
                                        isThumb: true,
                                      },
                                    })
                                  : dispatch({
                                      type: "SPECS_UPDATE",
                                      payload: {
                                        sIdx,
                                        keys: name,
                                        value,
                                        isThumb: false,
                                      },
                                    });
                                setDummy(!dummy);
                              }}
                            />
                            <ItemBox>
                              <IconButton
                                aria-label="delete"
                                onClick={() => {
                                  dispatch({
                                    type: "SPECS_DEL",
                                    payload: { sIdx },
                                  });
                                  setDummy(!dummy);
                                }}
                              >
                                <DeleteIcon
                                  style={{
                                    color: grey[500],
                                    fontSize: "18px",
                                  }}
                                />
                              </IconButton>
                            </ItemBox>
                          </ItemBox>
                        </SpecListRow>
                      </SpecListWrapper>
                    </SpecListContainer>
                  </InputForm>
                </BodyRow>
              ))}
          </BodyWrapper>
        </BodyContainer>
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <Divider />
        </div>
        <BodyContainer>
          <BodyWrapper>
            <BodyRow>
              <InputTitle>옵션</InputTitle>
              <InputForm
                style={{
                  gap: "10px",
                }}
              >
                <ItemBox
                  style={{
                    flex: 1,
                    padding: "10px",
                    boxSizing: "border-box",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    onClick={() => {
                      dispatch({ type: "OPTION_ADD" });
                      setDummy(!dummy);
                    }}
                  >
                    옵션그룹추가
                  </Button>
                  <Button variant="outlined" color="primary" size="small">
                    미리보기
                  </Button>
                </ItemBox>
              </InputForm>
            </BodyRow>
            {state.options &&
              state.options.map((optionGroup, gIdx) => (
                <>
                  <BodyRow key={"optionG" + gIdx}>
                    <InputTitle>
                      옵션 {gIdx + 1}
                      <ItemBox style={{ flex: 1 }}>
                        <IconButton aria-label="delete">
                          <DeleteIcon
                            style={{
                              color: grey[500],
                              fontSize: "18px",
                            }}
                          />
                        </IconButton>
                      </ItemBox>
                    </InputTitle>
                    <InputForm
                      style={{
                        gap: "10px",
                      }}
                    >
                      <OptionListContainer style={{ boxSizing: "border-box" }}>
                        <OptionListWrapper>
                          <OptionListRow style={{ gap: "5px" }}>
                            <ItemBox style={{ flex: 1 }}>
                              <InputText
                                name="groupTitle"
                                style={{ height: "15px", width: "100%" }}
                                placeholder="옵션그룹명"
                                onChange={(e) => {
                                  const { name, value } = e.target;
                                  dispatch({
                                    type: "OPTION_UPDATE",
                                    payload: {
                                      target: "GROUP",
                                      gIdx,
                                      keys: name,
                                      value,
                                    },
                                  });
                                  setDummy(!dummy);
                                }}
                              />
                            </ItemBox>
                            <ItemBox style={{ flex: 1 }}>
                              <InputText
                                name="subComment"
                                style={{ height: "15px", width: "100%" }}
                                placeholder="옵션 설명"
                                onChange={(e) => {
                                  const { name, value } = e.target;
                                  dispatch({
                                    type: "OPTION_UPDATE",
                                    payload: {
                                      target: "GROUP",
                                      gIdx,
                                      keys: name,
                                      value,
                                    },
                                  });
                                  setDummy(!dummy);
                                }}
                              />
                            </ItemBox>
                            <ItemBox style={{ flex: 1 }}>
                              <InputText
                                name="subCommentLink"
                                style={{ height: "15px", width: "100%" }}
                                placeholder="옵션 설명 링크"
                                onChange={(e) => {
                                  const { name, value } = e.target;
                                  dispatch({
                                    type: "OPTION_UPDATE",
                                    payload: {
                                      target: "GROUP",
                                      gIdx,
                                      keys: name,
                                      value,
                                    },
                                  });
                                  setDummy(!dummy);
                                }}
                              />
                            </ItemBox>
                            <ItemBox style={{ flex: 0.5 }}>
                              <Button
                                variant="contained"
                                color="success"
                                disableElevation
                                size="small"
                                style={{ height: "25px", fontSize: "12px" }}
                                onClick={() => {
                                  dispatch({
                                    type: "OPTION_ITEM_ADD",
                                    payload: { gIdx },
                                  });
                                  setDummy(!dummy);
                                }}
                              >
                                하위옵션추가
                              </Button>
                            </ItemBox>
                          </OptionListRow>
                          <div style={{ width: "100%", marginBottom: "20px" }}>
                            <Divider
                              sx={{ backgroundColor: lightGreen[100] }}
                            />
                          </div>
                          {optionGroup.options &&
                            optionGroup.options.map((optionItem, iIdx) => (
                              <>
                                <OptionListRow style={{ gap: "5px" }}>
                                  <ItemBox style={{ flex: 2 }}>
                                    <InputText
                                      style={{
                                        height: "15px",
                                        width: "100%",
                                      }}
                                      name="title"
                                      placeholder="옵션명 / 예: 최종 256G(기본), 최종 500G(500G로 교체)"
                                      onChange={(e) => {
                                        const { name, value } = e.target;
                                        dispatch({
                                          type: "OPTION_UPDATE",
                                          payload: {
                                            target: "ITEM",
                                            gIdx,
                                            iIdx,
                                            keys: name,
                                            value,
                                          },
                                        });
                                        setDummy(!dummy);
                                      }}
                                    />
                                  </ItemBox>
                                  <ItemBox style={{ flex: 1 }}>
                                    <InputText
                                      style={{
                                        height: "15px",
                                        width: "100%",
                                      }}
                                      name="value"
                                      value={
                                        state.options[gIdx].options[iIdx] &&
                                        new Intl.NumberFormat().format(
                                          state.options[gIdx].options[iIdx]
                                            .value
                                        )
                                      }
                                      placeholder="가격 / 예: 80000, 1200000"
                                      onChange={(e) => {
                                        const { name, value } = e.target;
                                        dispatch({
                                          type: "OPTION_UPDATE",
                                          payload: {
                                            target: "ITEM",
                                            gIdx,
                                            iIdx,
                                            keys: name,
                                            value: value.replaceAll(",", ""),
                                          },
                                        });

                                        setDummy(!dummy);
                                      }}
                                    />
                                  </ItemBox>
                                  <ItemBox style={{ flex: 0.1 }}>
                                    <IconButton aria-label="delete">
                                      <DeleteIcon
                                        style={{
                                          color: grey[500],
                                          fontSize: "18px",
                                        }}
                                      />
                                    </IconButton>
                                  </ItemBox>
                                </OptionListRow>
                              </>
                            ))}
                        </OptionListWrapper>
                      </OptionListContainer>
                    </InputForm>
                  </BodyRow>
                </>
              ))}
          </BodyWrapper>
        </BodyContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductWrite;
