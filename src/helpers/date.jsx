import moment from "moment";

export const getExperienceYear = (start) =>
  moment.duration(moment().diff(moment(start))).years();
