/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const VoiceRecordingSection = () => {
  return (
    <section className="w-full bg-[#DFEBF3] py-[80px] md:py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[16px] md:px-[40px] flex flex-col md:flex-row items-center gap-[60px]">

        {/* Sol Taraf: Metinler */}
        <div className="w-full md:w-1/2 flex flex-col items-start relative z-10">
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#3A5B93] leading-[1.2] tracking-tight mb-[24px]">
            Make it personal,<br />
            <span className="inline-block bg-[#A8C464] text-white px-[20px] py-[4px] rounded-[16px] -rotate-2 mt-[8px] shadow-sm">
              with your own voice
            </span>
          </h2>
          <p className="text-[#3A5B93]/80 text-[18px] mb-[24px] max-w-[420px]">
            Invite family members from anywhere to record stories, messages, or simple moments using the parent app.
          </p>
          <p className="text-[#3A5B93]/80 text-[18px] max-w-[420px]">
            Your child can replay these familiar voices through LunoBox — anytime, at their own pace.
          </p>
        </div>

        {/* Sağ Taraf: Görsel */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <img
            src="/images/mother.svg"
            alt="Mother recording a voice message with her child"
            className="w-full max-w-[500px] rounded-[24px] object-cover shadow-xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};