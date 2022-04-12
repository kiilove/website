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
import React, { useRef, useState } from "react";
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

const filter = createFilterOptions();
const ProductWrite = () => {
  const [categoryValue, setCategoryValue] = useState(null);
  const [images, setimages] = useState([]);
  const [specs, setSpecs] = useState([]);
  const [specInputTitle, setSpecInputTitle] = useState();
  const [specInputTitleComment, setSpecInputTitleComment] = useState();
  const [optionWindow, setOptionWindow] = useState(false);
  const [specWindow, setSpecWindow] = useState(false);
  const [options, setOptions] = useState([]);
  const [optionItems, setOptionItems] = useState([]);
  const [optionInputGroupTitle, setOptionInputGroupTitle] = useState();
  const [optionInputGroupInfo, setOptionInputGroupInfo] = useState();
  const [optionInputGroupInfoLink, setOptionInputGroupInfoLink] = useState();
  const [optionInputItemTitle, setOptionInputItemTitle] = useState();
  const [optionInputItemValue, setOptionInputItemValue] = useState();

  const specTitleRef = useRef(null);
  const specTitleCommentRef = useRef(null);

  const MaxImgCount = 100;

  const ImgUploadingChange = (imgList, addUpdateIndex) => {
    console.log(imgList, addUpdateIndex);
    setimages(imgList);
  };

  const initialSpecs = () => {
    setSpecInputTitle("");
    setSpecInputTitleComment("");
  };

  const addSpecs = () => {
    const specArr = [...specs];
    specArr.length === 0
      ? specArr.push({
          title: specTitleRef.current.value,
          titleComment: specTitleCommentRef.current.value,
          isThumb: true,
        })
      : specArr.push({
          title: specTitleRef.current.value,
          titleComment: specTitleCommentRef.current.value,
          isThumb: false,
        });

    setSpecs(specArr);
    initialSpecs();
    //setSpecWindow(true);
  };

  const delSpecs = (idx) => {
    const specArr = [...specs];
    specArr.splice(idx, 1);
    setSpecs(specArr);
  };

  const handleSpecItems = (idx, e) => {
    const specArr = [...specs];
    specArr[idx] = { ...specArr[idx], [e.target.name]: e.target.value };
    setSpecs(specArr);
  };

  const addOptionGroup = () => {
    const optionArr = [...options];
    optionArr.push({
      groupTitle: undefined,
      subComment: undefined,
      subCommentLink: undefined,
      options: [],
    });
    setOptionWindow(true);
    setOptions(optionArr);
  };

  const addOptionItem = (gIdx) => {
    const optionArr = [...options];
    optionArr[gIdx].options.push({
      title: undefined,
      value: undefined,
    });
    setOptions(optionArr);
  };

  const delOptionGroup = (gIdx) => {
    const optionArr = [...options];
    optionArr.splice(gIdx, 1);
    setOptions(optionArr);
  };

  const delOptionItem = (gIdx, iIdx) => {
    const optionArr = [...options];
    optionArr[gIdx].options.splice(iIdx, 1);
    setOptions(optionArr);
  };

  const handleOptionGroup = (gIdx, e) => {
    const optionArr = [...options];
    console.log(optionArr[gIdx]);
    optionArr[gIdx] = { ...optionArr[gIdx], [e.target.name]: e.target.value };
    setOptions(optionArr);
  };
  const handleOptionItems = (gIdx, iIdx, e) => {
    console.log(iIdx);
    const optionArr = [...options];
    optionArr[gIdx].options[iIdx] = {
      ...optionArr[gIdx].options[iIdx],
      [e.target.name]: e.target.value,
    };
    console.log(optionArr);
    setOptions(optionArr);
  };

  console.log(specs);
  console.log(options);
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <TitleWrapper>
            <TitleRow>
              <ItemBox>
                <Typotext size="20px">제품등록</Typotext>
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
                <Autocomplete
                  value={categoryValue}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      setCategoryValue({
                        title: newValue,
                        value: newValue,
                      });
                    } else if (newValue && newValue.inputValue) {
                      // Create a new value from the user input
                      setCategoryValue({
                        title: newValue.inputValue,
                        value: newValue.inputValue,
                      });
                    } else {
                      setCategoryValue(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some(
                      (option) => inputValue === option.title
                    );
                    if (inputValue !== "" && !isExisting) {
                      filtered.push({
                        inputValue,
                        title: `추가 "${inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="productCate"
                  options={ProductCategories}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                  }}
                  renderOption={(props, option) => (
                    <li {...props}>{option.title}</li>
                  )}
                  sx={{ width: 300 }}
                  freeSolo
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      sx={{ width: "350px" }}
                    />
                  )}
                />
                {/* {JSON.stringify(categoryValue)} */}
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">모델카테고리(gram_15_22H1)</Typotext>
              </InputTitle>
              <InputForm>
                <TextField size="small" sx={{ width: "350px" }} />
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">제품명(15인치 그램 2022년)</Typotext>
              </InputTitle>
              <InputForm>
                <TextField size="small" sx={{ width: "350px" }} />
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">모델명(LG 15Z95N)</Typotext>
              </InputTitle>
              <InputForm>
                <TextField size="small" sx={{ width: "350px" }} />
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">가격</Typotext>
              </InputTitle>
              <InputForm>
                <TextField size="small" sx={{ width: "350px" }} />
              </InputForm>
            </BodyRow>
          </BodyWrapper>
        </BodyContainer>
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <Divider />
        </div>
        <BodyContainer>
          <BodyWrapper>
            {specWindow ? (
              <>
                <BodyRow>
                  <InputTitle>스펙</InputTitle>
                  <InputForm
                    style={{
                      gap: "10px",
                    }}
                  >
                    <ItemBox
                      style={{
                        flex: 2,
                        padding: "10px",
                        boxSizing: "border-box",
                        flexDirection: "column",
                      }}
                    >
                      <ItemRow style={{ width: "100%" }}>
                        <InputText
                          ref={specTitleRef}
                          value={specInputTitle}
                          onChange={(e) => setSpecInputTitle(e.target.value)}
                          style={{ width: "100%" }}
                        />
                      </ItemRow>
                      <ItemRow>
                        <Typotext size="12px">
                          예) 그램 15 i7, Intel Core i7 1165G7
                        </Typotext>
                      </ItemRow>
                    </ItemBox>
                    <ItemBox
                      style={{
                        flex: 2,
                        padding: "10px",
                        boxSizing: "border-box",
                        flexDirection: "column",
                      }}
                    >
                      <ItemRow style={{ width: "100%" }}>
                        <InputText
                          ref={specTitleCommentRef}
                          value={specInputTitleComment}
                          onChange={(e) =>
                            setSpecInputTitleComment(e.target.value)
                          }
                          style={{ width: "100%" }}
                        />
                      </ItemRow>
                      <ItemRow>
                        <Typotext size="12px">
                          예) 4코어 4쓰레드 2.3GHz, 프로세서
                        </Typotext>
                      </ItemRow>
                    </ItemBox>

                    <ItemBox
                      style={{
                        flex: 1,
                        padding: "10px",
                        boxSizing: "border-box",
                        flexDirection: "column",
                      }}
                    >
                      <ItemRow
                        style={{
                          width: "100%",
                          gap: "5px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          color="success"
                          size="small"
                          onClick={() => addSpecs()}
                        >
                          추가
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => addSpecs()}
                        >
                          미리보기
                        </Button>
                      </ItemRow>
                      <ItemRow style={{ height: "20px" }}></ItemRow>
                    </ItemBox>
                  </InputForm>
                </BodyRow>
                {specs && (
                  <>
                    <BodyRow>
                      <InputTitle>내용</InputTitle>
                      <InputForm>
                        <SpecListContainer>
                          <SpecListWrapper>
                            {specs.map((item, index) => (
                              <SpecListRow key={"specs" + index}>
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
                                    value={
                                      specs[index]
                                        ? specs[index].title
                                        : item.title
                                    }
                                    onChange={(e) => handleSpecItems(index, e)}
                                  />
                                  <InputText
                                    name="titleComment"
                                    value={
                                      specs[index]
                                        ? specs[index].titleComment
                                        : item.titleComment
                                    }
                                    onChange={(e) => handleSpecItems(index, e)}
                                  />
                                  <ItemBox>
                                    <IconButton aria-label="delete">
                                      <DeleteIcon
                                        style={{
                                          color: grey[500],
                                          fontSize: "18px",
                                        }}
                                        onClick={() => delSpecs(index)}
                                      />
                                    </IconButton>
                                  </ItemBox>
                                </ItemBox>
                              </SpecListRow>
                            ))}
                          </SpecListWrapper>
                        </SpecListContainer>
                      </InputForm>
                    </BodyRow>
                  </>
                )}
              </>
            ) : (
              <>
                <BodyRow>
                  <ItemBox style={{ justifyContent: "center", width: "100%" }}>
                    <Button
                      sx={{ fontSize: "15px", fontWeight: "bold" }}
                      onClick={() => setSpecWindow(true)}
                    >
                      스펙추가
                    </Button>
                  </ItemBox>
                </BodyRow>
              </>
            )}
          </BodyWrapper>
        </BodyContainer>
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <Divider />
        </div>
        <BodyContainer>
          <BodyWrapper>
            {optionWindow ? (
              <>
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
                        onClick={addOptionGroup}
                      >
                        옵션그룹추가
                      </Button>
                      <Button variant="outlined" color="primary" size="small">
                        미리보기
                      </Button>
                    </ItemBox>
                  </InputForm>
                </BodyRow>
                {options.map((optionGroup, gIdx) => (
                  <>
                    <BodyRow key={"optionG" + gIdx}>
                      <InputTitle>
                        옵션 {gIdx + 1}
                        <ItemBox style={{ flex: 1 }}>
                          <IconButton
                            aria-label="delete"
                            onClick={() => delOptionGroup(gIdx)}
                          >
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
                        <OptionListContainer
                          style={{ boxSizing: "border-box" }}
                        >
                          <OptionListWrapper>
                            <OptionListRow style={{ gap: "5px" }}>
                              <ItemBox style={{ flex: 1 }}>
                                <InputText
                                  name="groupTitle"
                                  style={{ height: "15px", width: "100%" }}
                                  placeholder="옵션그룹명"
                                  value={
                                    options[gIdx]
                                      ? options[gIdx].groupTitle
                                      : optionGroup.groupTitle
                                  }
                                  onChange={(e) => handleOptionGroup(gIdx, e)}
                                />
                              </ItemBox>
                              <ItemBox style={{ flex: 1 }}>
                                <InputText
                                  name="subComment"
                                  style={{ height: "15px", width: "100%" }}
                                  placeholder="옵션 설명"
                                  value={
                                    options[gIdx]
                                      ? options[gIdx].subComment
                                      : optionGroup.subComment
                                  }
                                  onChange={(e) => handleOptionGroup(gIdx, e)}
                                />
                              </ItemBox>
                              <ItemBox style={{ flex: 1 }}>
                                <InputText
                                  name="subCommentLink"
                                  style={{ height: "15px", width: "100%" }}
                                  placeholder="옵션 설명 링크"
                                  value={
                                    options[gIdx]
                                      ? options[gIdx].subCommentLink
                                      : optionGroup.subCommentLink
                                  }
                                  onChange={(e) => handleOptionGroup(gIdx, e)}
                                />
                              </ItemBox>
                              <ItemBox style={{ flex: 0.5 }}>
                                <Button
                                  variant="contained"
                                  color="success"
                                  disableElevation
                                  size="small"
                                  style={{ height: "25px", fontSize: "12px" }}
                                  onClick={() => addOptionItem(gIdx)}
                                >
                                  하위옵션추가
                                </Button>
                              </ItemBox>
                            </OptionListRow>
                            <div
                              style={{ width: "100%", marginBottom: "20px" }}
                            >
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
                                        value={
                                          options[gIdx].options[iIdx].title
                                            ? options[gIdx].options[iIdx].title
                                            : optionItem.title
                                        }
                                        onChange={(e) =>
                                          handleOptionItems(gIdx, iIdx, e)
                                        }
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
                                          options[gIdx].options[iIdx].value
                                            ? options[gIdx].options[iIdx].value
                                            : optionItem.value
                                        }
                                        placeholder="가격 / 예: 80000, 1200000"
                                        onChange={(e) =>
                                          handleOptionItems(gIdx, iIdx, e)
                                        }
                                      />
                                    </ItemBox>
                                    <ItemBox style={{ flex: 0.1 }}>
                                      <IconButton
                                        aria-label="delete"
                                        onClick={() =>
                                          delOptionItem(gIdx, iIdx)
                                        }
                                      >
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
              </>
            ) : (
              <BodyRow>
                <ItemBox style={{ justifyContent: "center", width: "100%" }}>
                  <Button
                    color="success"
                    sx={{ fontSize: "15px", fontWeight: "bold" }}
                    onClick={addOptionGroup}
                  >
                    옵션그룹추가
                  </Button>
                </ItemBox>
              </BodyRow>
            )}
          </BodyWrapper>
        </BodyContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductWrite;
