import P1 from "../../../statics/p1.jpg";
import P2 from "../../../statics/p2.jpg";
import P3 from "../../../statics/p3.jpg";
import P4 from "../../../statics/p4.jpg";
import P5 from "../../../statics/p5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
function Slider() {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      className="mySwiper h-full"
      autoplay={{
        delay: 5000,
        loop: true,
      }}
    >
      <SwiperSlide style={{ position: "relative" }}>
        <img src={P1} className="w-full h-full" alt="p1" />
        <div className=" text-white absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30px] lg:translate-y-[120px]">
          <h5 className="text-xl md:text-2xl font-bold">
            မြန်မာဝီကီပီးဒီးယားတွင် ဆောင်းပါးကောင်းများ
          </h5>
          <p>
            ၁၉၆၁-ခုမှ စတင်၍ ပညာဆည်းပူးခဲ့ပြီး ရန်ကုန်တက္ကသိုလ်မှ
            မနုဿဗေဒပညာရပ်တွင်
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={P2} className="w-full h-full" alt="p2" />
        <div className=" text-white absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30px] lg:translate-y-[120px]">
          <h5 className="text-xl md:text-2xl font-bold">
            မြန်မာဝီကီပီးဒီးယားတွင် ဆောင်းပါးကောင်းများ
          </h5>
          <p>
            ကဏ္ဍ:တက္ကဆပ်ပြည်နယ် - ဝီကီပီးဒီးယားမြန်မာဘာသာ Wiki 2022 -
            Tiengtrung.cn
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={P3} alt="p3" className="w-full h-full" />
        <div className=" text-white absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30px] lg:translate-y-[120px]">
          <h5 className="text-xl md:text-2xl font-bold">
            {" "}
            မြန်မာဝီကီပီးဒီးယားတွင် ဆောင်းပါးကောင်းများ
          </h5>
          <p>၂၀၀၈ - အကြောင်းအရာများ သိသိသာသာ တိုးတက်လာ။</p>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={P4} alt="p4" className="w-full h-full" />
        <div className=" text-white absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30px] lg:translate-y-[120px]">
          <h5 className="text-xl md:text-2xl font-bold">
            မြန်မာဝီကီပီးဒီးယားတွင် ဆောင်းပါးကောင်းများ
          </h5>
          <p>
            ၂၀၁၀ - ပထမအကြိမ် မြန်မာဝီကီပီးဒီးယား အလုပ်ရုံ ဆွေးနွေးပွဲကို
            ထိုင်းနိုင်ငံ၊ ဘန်ကောက်မြို့တွင် ပြုလုပ်ခဲ့ပြီ...
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={P5} alt="p5" className="w-full h-full" />
        <div className=" text-white absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30px] lg:translate-y-[120px]">
          <h5 className="text-xl md:text-2xl font-bold">
            မြန်မာဝီကီပီးဒီးယားတွင် ဆောင်းပါးကောင်းများ
          </h5>
          <p>၂၀၁၂ - ဘားကမ့်ရန်ကုန်တွင် မြန်မာဝီကီပီးဒီးယားကို မိတ်ဆက်ခဲ့သည်။</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
