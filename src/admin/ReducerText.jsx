import React, { useEffect, useReducer, useRef, useState } from "react";
import { Divider } from "@mui/material";
import styled from "styled-components";
const initState = {
  img: [],
  color: [],
  bigCatecory: "",
  category: "",
  modelName: "",
  modelCode: "",
  price: 0,
  spec: [],
  options: [],
};

const initialForm = [
  { img: [{ isThumb: undefined }] },
  { color: [{ code: undefined }] },
  { bigCategory: "" },
  { category: "" },
  { modelName: "" },
  { modelCode: "" },
  { price: 0 },
  { spec: [{ title: undefined }] },
  { options: [{ groupTitle: undefined, options: [{ title: undefined }] }] },
];

const initTitle = [
  "제품사진",
  "색상",
  "제품카테고리",
  "모델카테고리",
  "제품명",
  "모델명",
  "가격",
  "스펙",
  "옵션",
];

function reducer(state, action) {
  switch (action.type) {
    case "COLOR_ADD":
      state.color.push({
        code: action.payload.code,
        title: action.payload.title,
      });
      return state;
    case "COLOR_DEL":
      state.color.slice(action.payload.color.idx, 1);
      return state;
    case "COLOR_UPDATE":
      const colorArr = [...state.color];
      colorArr[action.payload.idx] = {
        ...colorArr[action.payload.idx],
        [action.payload.keys]: action.payload.value,
      };
      state.color = colorArr;
      return state;
    case "OPTION_ADD":
      state.options.push({
        groupTitle: undefined,
        subComment: undefined,
        subCommentLink: undefined,
      });
      return state;

    case "OPTION_ITEM_ADD":
      if (state.options[action.payload.idx].options) {
        state.options[action.payload.idx].options.push({
          title: undefined,
          value: undefined,
        });
      } else {
        state.options[action.payload.idx].options = [
          {
            title: undefined,
            value: undefined,
          },
        ];
      }
      return state;

    case "OPTION_UPDATE":
      switch (action.payload.target) {
        case "GROUP":
          const optionArr = [...state.options];
          optionArr[action.payload.oIdx] = {
            ...optionArr[action.payload.oIdx],
            [action.payload.keys]: action.payload.value,
          };
          state.options = optionArr;
          return state;
        case "ITEM":
          const itemArr = [...state.options[action.payload.oIdx].options];
          itemArr[action.payload.iIdx] = {
            ...itemArr[action.payload.iIdx],
            [action.payload.keys]: action.payload.value,
          };
          state.options[action.payload.oIdx].options = itemArr;
          return state;
        default:
          return state;
      }

    case "INPUT_UPDATE":
      return { ...state, [action.payload.keys]: action.payload.value };

    default:
      return state;
  }
}

const ReducerText = () => {
  const [refs, setRefs] = useState();
  const [dummy, setDummy] = useState(true);
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRefs = useRef([]);
  const arrayRefs = useRef([]);

  const handleState = (e) => {
    const { name, value } = e.target;
    setRefs({ ...refs, [name]: value });
  };

  const handleOptionsGroup = (e, idx) => {
    const [name, value] = e.target;
  };
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ display: "flex", width: "100%", height: "40px" }}>
          <div style={{ width: "100px" }}> 모델사진</div>
          <div style={{ width: "50%" }}>
            <input
              name="img"
              onChange={(e) => {
                const { name, value } = e.target;
                dispatch({
                  type: "INPUT_UPDATE",
                  payload: { keys: name, value: value },
                });
              }}
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <Divider />
        </div>
        <div style={{ display: "flex", width: "100%", height: "100% auto" }}>
          <div style={{ width: "100px" }}> 색상</div>
          <div style={{ width: "50%" }}>
            <div style={{ display: "flex", gap: "5px" }}>
              <div>
                <input
                  name="code"
                  ref={(el) => (arrayRefs.current[0] = el)}
                  placeholder="code"
                />
              </div>
              <div>
                <input
                  name="title"
                  ref={(el) => (arrayRefs.current[1] = el)}
                  placeholder="title"
                />
              </div>
              <button
                onClick={() => {
                  dispatch({
                    type: "COLOR_ADD",
                    payload: {
                      code: arrayRefs.current[0].value,
                      title: arrayRefs.current[1].value,
                    },
                  });
                  arrayRefs.current[0].value = "";
                  arrayRefs.current[1].value = "";
                  setDummy(!dummy);
                }}
              >
                추가
              </button>
            </div>
            {state.color.map((color, cIdx) => (
              <div style={{ display: "flex", gap: "5px" }}>
                <div>
                  <input
                    name="code"
                    placeholder="code"
                    value={state.color[cIdx].code}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      dispatch({
                        type: "COLOR_UPDATE",
                        payload: { idx: cIdx, keys: name, value: value },
                      });
                      setDummy(!dummy);
                    }}
                  />
                </div>
                <div>
                  <input
                    name="title"
                    placeholder="title"
                    value={state.color[cIdx].title}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      dispatch({
                        type: "COLOR_UPDATE",
                        payload: { idx: cIdx, keys: name, value: value },
                      });
                      setDummy(!dummy);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <Divider />
        </div>
        <div style={{ display: "flex", width: "100%", height: "100% auto" }}>
          <div style={{ width: "100px" }}> 옵션</div>
          <div style={{ width: "80%" }}>
            <button
              onClick={() => {
                dispatch({ type: "OPTION_ADD" });
                setDummy(!dummy);
              }}
            >
              추가
            </button>
          </div>
        </div>
        {state.options &&
          state.options.map((option, oIdx) => (
            <div style={{ display: "flex" }}>
              <div style={{ width: "100px" }}> </div>
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <input
                      placeholder="groupTitle"
                      name="groupTitle"
                      value={state.options[oIdx].groupTitle}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        dispatch({
                          type: "OPTION_UPDATE",
                          payload: {
                            oIdx: oIdx,
                            keys: name,
                            value: value,
                            target: "GROUP",
                          },
                        });
                        setDummy(!dummy);
                      }}
                    />
                    <input
                      placeholder="subComment"
                      name="subComment"
                      value={state.options[oIdx].subComment}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        dispatch({
                          type: "OPTION_UPDATE",
                          payload: {
                            oIdx: oIdx,
                            keys: name,
                            value: value,
                            target: "GROUP",
                          },
                        });
                        setDummy(!dummy);
                      }}
                    />
                    <input
                      placeholder="subCommentLink"
                      name="subCommentLink"
                      value={state.options[oIdx].subCommentLink}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        dispatch({
                          type: "OPTION_UPDATE",
                          payload: {
                            oIdx: oIdx,
                            keys: name,
                            value: value,
                            target: "GROUP",
                          },
                        });
                        setDummy(!dummy);
                      }}
                    />
                    <button
                      onClick={() => {
                        dispatch({
                          type: "OPTION_ITEM_ADD",
                          payload: { idx: oIdx },
                        });
                        setDummy(!dummy);
                      }}
                    >
                      품목추가
                    </button>
                  </div>
                  {option.options &&
                    option.options.map((item, iIdx) => (
                      <div>
                        <input
                          placeholder="options.title"
                          name="title"
                          value={state.options[oIdx].options[iIdx].title}
                          onChange={(e) => {
                            const { name, value } = e.target;
                            dispatch({
                              type: "OPTION_UPDATE",
                              payload: {
                                oIdx: oIdx,
                                iIdx: iIdx,
                                keys: name,
                                value: value,
                                target: "ITEM",
                              },
                            });
                            setDummy(!dummy);
                          }}
                        />
                        <input
                          placeholder="options.value"
                          name="value"
                          value={
                            state.options[oIdx].options[iIdx].value &&
                            state.options[oIdx].options[iIdx].value
                          }
                          onChange={(e) => {
                            const { name, value } = e.target;
                            dispatch({
                              type: "OPTION_UPDATE",
                              payload: {
                                oIdx: oIdx,
                                iIdx: iIdx,
                                keys: name,
                                value: value,
                                target: "ITEM",
                              },
                            });
                            setDummy(!dummy);
                          }}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <button onClick={() => console.log(state)}>출력</button>
      </div>
    </>
  );
};

export default ReducerText;
