import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import React from "react";
import Section from "./Section";
import Emailrow from "./Emailrow";

const EmailList = () => {
  return (
    <div className="emaillist">
      <div className="emaillist__settings">
        <div className="emaillist__setings--left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emaillist__settings--right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaillist__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" selected />
        <Section
          Icon={LocalOfferIcon}
          title="Promotions"
          color="green"
          selected
        />
      </div>
      <div className="emaillist__list">
        <Emailrow
          title="Twitch"
          subject="hey fellow streamer!!"
          description="this is a test"
          time="10pm"
        />
        <Emailrow
          title="Twitch"
          subject="hey fellow streamer!!"
          description="this is a test"
          time="10pm"
        />
        <Emailrow
          title="Twitch"
          subject="hey fellow streamer!!"
          description="this is a test"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
