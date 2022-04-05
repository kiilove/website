import {
  Autocomplete,
  Button,
  createFilterOptions,
  Divider,
  IconButton,
  Input,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { ItemBox, ItemRow } from "../styles/Commons";
import { Typotext } from "../styles/Typotext";

import { grey, blueGrey } from "@mui/material/colors";
import { optionGroupUnstyledClasses } from "@mui/base";
import ImageUploading from "react-images-uploading";
import { ProductCategories } from "../data";
import { PhotoCamera } from "@mui/icons-material";

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
  background-color: ${grey[300]};
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
  width: 100%;
  height: 100%;
`;

const ImgDragBox = styled.button`
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${grey[500]};
  cursor: pointer;
  background: ;
`;

const ImgPreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
`;

const filter = createFilterOptions();
const ProductWrite = () => {
  const [categoryValue, setCategoryValue] = useState(null);
  const [images, setimages] = useState([]);
  const MaxImgCount = 100;

  const ImgUploadingChange = (imgList, addUpdateIndex) => {
    console.log(imgList, addUpdateIndex);
    setimages(imgList);
  };

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
            <BodyRow style={{ height: "150px" }}>
              <InputTitle>제품사진</InputTitle>
              <InputForm
                style={{
                  height: "150px",
                  flex: 4,
                  alignItems: "center",
                }}
              >
                <ImgFileContainer>
                  <ImgFileWrapper>
                    <ImgFileRow style={{ height: "120px" }}>
                      <ItemBox
                        style={{
                          flex: 1,
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
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
                            <ItemBox style={{ flexDirection: "column" }}>
                              <ItemRow>
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
                              </ItemRow>
                            </ItemBox>
                          )}
                        </ImageUploading>
                      </ItemBox>
                      <ItemBox
                        style={{
                          flex: 4,
                          justifyContent: "center",
                          alignItems: "flex-start",
                        }}
                      >
                        <ImgPreviewContainer>
                          <ImgPreviewWrapper>
                            {images.map((item, index) => (
                              <ImgPreviewBox key={index}>
                                <ImgPreviewItem src={item["data_url"]} />
                                <ImgPreviewAction></ImgPreviewAction>
                              </ImgPreviewBox>
                            ))}
                          </ImgPreviewWrapper>
                        </ImgPreviewContainer>
                      </ItemBox>
                    </ImgFileRow>
                  </ImgFileWrapper>
                </ImgFileContainer>
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
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">스펙</Typotext>
              </InputTitle>
              <InputForm>
                <TextField size="small" sx={{ width: "350px" }} />
              </InputForm>
            </BodyRow>
            <BodyRow>
              <InputTitle>
                <Typotext size="15px">옵션</Typotext>
              </InputTitle>
              <InputForm>
                <TextField size="small" sx={{ width: "350px" }} />
              </InputForm>
            </BodyRow>
          </BodyWrapper>
        </BodyContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductWrite;
