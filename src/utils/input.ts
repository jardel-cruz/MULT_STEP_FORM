import { IUserInfo } from "../context/types";

export const controllerInput =
  (
    key: keyof IUserInfo,
    [userInfos, setUserInfos]: [
      IUserInfo,
      React.Dispatch<React.SetStateAction<IUserInfo>>
    ]
  ) =>
  ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfos({ ...userInfos, [key]: target.value });
  };

export const telInputController =
  ([userInfos, setUserInfos]: [
    IUserInfo,
    React.Dispatch<React.SetStateAction<IUserInfo>>
  ]) =>
  ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const dddRegex = /\([0-9]{2}\)/gm;
    const parenthesesRegex = /[\(\)]/gm;

    if (value.length === 2 && Number(value.trim())) {
      return setUserInfos({
        ...userInfos,
        tel: `(${value[0]}${value[1]})`,
      });
    }

    if (!dddRegex.test(value) && (value.includes("(") || value.includes(")"))) {
      const valueFormate = value.replaceAll(parenthesesRegex, "");
      return setUserInfos({ ...userInfos, tel: valueFormate });
    }

    if (value.length === 3) {
      return setUserInfos({
        ...userInfos,
        tel: `(${value[0]}${value[1]})${value[2]}`,
      });
    }

    if (value.length === 14) {
      return;
    }

    setUserInfos({ ...userInfos, tel: value });
  };
