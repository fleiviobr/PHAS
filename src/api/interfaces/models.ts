import Address from "../models/address";
import User from "../models/user";
import Person from "../models/people";
import Activity from "../models/activity";

export default interface Models {
  Address: typeof Address;
  Users: typeof User;
  Person: typeof Person;
  Activity: typeof Activity;
}
