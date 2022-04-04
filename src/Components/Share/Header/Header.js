import Slider from "./Slider";

function Header() {
  return (
    <div className="lg:grid grid-cols-10 md:mt-5 min-h-[100vh]">
      <div className="col-span-10 lg:col-span-6 h-[400px] lg:h-[500px]">
        <Slider />
      </div>
      <div className="col-span-10 lg:col-span-4 w-[98%] h-[400px] mx-auto lg:mx-0 lg:ml-auto">
        <iframe
          className="w-full h-[300px] md:w-full md:h-full lg:w-full lg:h-[80%]"
          src="https://www.youtube.com/embed/3PJO0f7m8Aw"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h1 className="text-xl font-bold word mt-2">
          National Unity Government (NUG)၏ PVTV Channel မှ ၂၀၂၂ ခုနှစ် ဧပြီလ ၂
          ရက်ထုတ်လွှင့်မှုမျာ
        </h1>
        <p className="text-justify mt-2">
          ဆရာမနုဿ ကျော်ဝင်းကို ကချင်ပြည်နယ် မြစ်ကြီးနားမြို့တွင် အဖ
          ဦးအုန်းမောင်၊ အမိ ဒေါ်လှရှိန်တို့က ၁၉၄၅ ခုနှစ်၊ ဇွန်လ ၃ ရက်နေ့တွင်
          မွေးဖွားခဲ့သည်။ မွေးချင်း ငါးယောက် အနက် သားအကြီးဆုံး ဖြစ်သည်။
          အမည်ရင်းမှာ ကျော်ဝင်း ဖြစ်သည်။ ၁၉၆၁-ခုမှ စတင်၍ ပညာဆည်းပူးခဲ့ပြီး
          ရန်ကုန်တက္ကသိုလ်မှ မနုဿဗေဒပညာရပ်တွင် ဝိဇ္ဇာ(ဂုဏ်ထူး)ဘွဲ့ကို၎င်း၊
          မဟာဝိဇ္ဇာဘွဲ့ကို၎င်း ရရှိခဲ့သည်။ <b>...</b>
        </p>
      </div>
    </div>
  );
}

export default Header;
