import React from "react";
import { BookOpen, ArrowRight } from "../components/Icon";
export default function Ribbon() {
  return (
    <a href="/courses/sketch-101/" className="ribbon ribbon--truncated">
      <div className="ribbon__wrapper">
        <div className="ribbon__content">
          <BookOpen />
          <span className="ribbon__message">
            Learn Sketch today with our free beginner’s course
          </span>
          <ArrowRight />
        </div>
      </div>
    </a>
  );
}
