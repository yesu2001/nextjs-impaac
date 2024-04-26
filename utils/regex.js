export const PHONEREGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const PASSWORDREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const PANCARD = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

// export const UPI_ID = [a-zA-Z0-9\.\-]{2,256}\@[a-zA-Z][a-zA-Z]{2,64}/

export const ifscCodeRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

export const bandAccountRegex = /^\d{9,18}$/;

export const socialLinkRegex = /(https?:\/\/)?(www\.)?(facebook|twitter|instagram|linkedin)\.com\/[a-zA-Z0-9_.-]+/gi;
export const youtubeLinkRegex =
  /^(https:\/\/www\.youtube\.com\/(watch\?v=[A-Za-z0-9_-]+|@[\w-]+|shorts\/[A-Za-z0-9_-]+|channel\/[\w-]+))$/;

export const youtubeVideoRegex =
  /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\.+&v=))((\w|-){11})(?:\S+)?$/;
