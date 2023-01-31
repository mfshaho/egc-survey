import { InLang } from "@/components";

const p1 =
  "انطلاقا من القناعة بنظام الحوافز الاقتصادية وآلية السوق في تحقيق الاستخدام الأمثل للموارد الاقتصادية (المادية منها والبشرية)، في البلد، في حدود الإمكانات التقنية والمعرفية المتاحة، تسعى بوابة الشرق للأبحاث الاقتصادية ودراسات السوق إلى تعزيز التعاون البناء بين القطاع الخاص ممثلا بالشركات الاستثمارية المحلية والأجنبية، والقطاع العام ممثلا بالمؤسسات الحكومية المختلفة، في ظل دعم وإسناد المنظمات غير الحكومية المحلية والدولية، من أجل تحقيق التحول نحو اقتصاد السوق، وإعادة تأهيل القطاع الخاص لقيادة النهوض الاقتصادي، واستثمار موارد البلد بما يحقق أعلى مستويات الكفاءة والإنتاجية التي تنعكس على مستويات المعيشة والرفاه ودفع عجلة النمو الاقتصاد نحو التقدم المستمر.";
const p2 =
  "ولكي تنهض بوابة الشرق بمسؤولياتها وتقدم أفضل الخدمات البحثية والمعرفية التي تعزز فرص التنمية والاستثمار تتوجه بالاستبانة الآتية إلى المستثمرين ومديري الشركات والمسؤولين الحكوميين والعاملين في المنظمات غير الحكومية، والمنظمات الدولية العاملة في العراق، ومراكز الأبحاث والدراسات الاقتصادية وغير الاقتصادية، راجين التعاون في الإجابة الوافية على أسئلة الاستبانة: ";
export default function Arabic() {
  return (
    <main dir="rtl">
      <div className="flex justify-center" dir="ltr">
        <InLang />
      </div>

      <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
        <div className="text-3xl">
          الاحتياجات البحثية للمؤسسات الاقتصادية في العراق
        </div>
        <div className="lg:text-lg sm:text-lg font-light">{p1}</div>
        <div className="lg:text-lg sm:text-lg font-light">{p2}</div>
      </div>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSfKZe0Wvw6W-3AZClvSkePaqSERUFchUJBRLSso5IS0GctHpg/formResponse"
        method="POST"
      >
        <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <label htmlFor="">
            <div className="text-2xl">بريدك الالكتروني*</div>
            <input
              type="email"
              name="entry.1740200965"
              placeholder="اجابتك..."
              className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
            />
          </label>
        </div>

        <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <div className="text-2xl">نوع المؤسسة:</div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="مؤسسة خاصة"
              name="entry.1119778135"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              مؤسسة خاصة
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="مؤسسة حكومية"
              name="entry.1119778135"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              مؤسسة حكومية
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="منظمة غير حكومية"
              name="entry.1119778135"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              منظمة غير حكومية
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="مركز بحثي"
              name="entry.1119778135"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              مركز بحثي
            </label>
          </div>

          <div className="flex items-center mb-4">
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300 flex items-center gap-5"
            >
              اخرى:
              <input
                type="text"
                name="entry.619012737"
                placeholder="اكتب هنا..."
                className="bg-lighter dark:bg-darker p-3 rounded-xl w-full lg:focus:w-96 md:focus:w-full"
              />
            </label>
          </div>
        </div>

        <div className="bg-light dark:bg-dark flex flex-col gap-8 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <label htmlFor="">
            {" "}
            <div className="text-2xl">مجال عمل المؤسسة:</div>
            <input
              type="text"
              name="entry.1739662440"
              placeholder="اجابتك..."
              className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
            />
          </label>
        </div>

        <div className="bg-light dark:bg-dark flex flex-col gap-8 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <label htmlFor="">
            {" "}
            <div className="text-2xl">بلد المؤسسة:</div>
            <select
              name="entry.306491599"
              className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
            >
              <option value="" className="text-dark/50 dark:text-light/50">
                اختر بلد...
              </option>
              <option value="أفغانستان">أفغانستان</option>
              <option value="ألبانيا">ألبانيا</option>
              <option value="الجزائر">الجزائر</option>
              <option value="ساموا الأمريكية">ساموا الأمريكية</option>
              <option value="أندورا">أندورا</option>
              <option value="أنغولا">أنغولا</option>
              <option value="أنغويلا">أنغويلا</option>
              <option value="أنتيغوا وبربودا">أنتيغوا وبربودا</option>
              <option value="الأرجنتين">الأرجنتين</option>
              <option value="أرمينيا">أرمينيا</option>
              <option value="أروبا">أروبا</option>
              <option value="أستراليا">أستراليا</option>
              <option value="النمسا">النمسا</option>
              <option value="أذربيجان">أذربيجان</option>
              <option value="جزر البهاما">جزر البهاما</option>
              <option value="البحرين">البحرين</option>
              <option value="بنغلاديش">بنغلاديش</option>
              <option value="بربادوس">بربادوس</option>
              <option value="بيلاروسيا">بيلاروسيا</option>
              <option value="بلجيكا">بلجيكا</option>
              <option value="بيلز">بيلز</option>
              <option value="بنن">بنن</option>
              <option value="برمودا">برمودا</option>
              <option value="بوتان">بوتان</option>
              <option value="بوليفيا">بوليفيا</option>
              <option value="البوسنة والهرسك">البوسنة والهرسك</option>
              <option value="بوتسوانا">بوتسوانا</option>
              <option value="البرازيل">البرازيل</option>
              <option value="بروناي دار السلام">بروناي دار السلام</option>
              <option value="بلغاريا">بلغاريا</option>
              <option value="بوركينا فاسو">بوركينا فاسو</option>
              <option value="بوروندي">بوروندي</option>
              <option value="كمبوديا">كمبوديا</option>
              <option value="الكاميرون">الكاميرون</option>
              <option value="كندا">كندا</option>
              <option value="جزر كايمان">جزر كايمان</option>
              <option value="جمهورية أفريقيا الوسطى">
                جمهورية أفريقيا الوسطى
              </option>
              <option value="تشاد">تشاد</option>
              <option value="شيلي">شيلي</option>
              <option value="الصين">الصين</option>
              <option value="كولومبيا">كولومبيا</option>
              <option value="الكونغو ، ديموقراطية">الكونغو ، ديموقراطية</option>
              <option value="الكونغو، جمهورية">الكونغو، جمهورية</option>
              <option value="جزر كوك">جزر كوك</option>
              <option value="كوستاريكا">كوستاريكا</option>
              <option value="كوت ديفوار">كوت ديفوار</option>
              <option value="كرواتيا">كرواتيا</option>
              <option value="كوبا">كوبا</option>
              <option value="قبرص">قبرص</option>
              <option value="جمهورية التشيك">جمهورية التشيك</option>
              <option value="الدانمارك">الدانمارك</option>
              <option value="جيبوتي">جيبوتي</option>
              <option value="دومينيكا">دومينيكا</option>
              <option value="جمهورية الدومينيكان">جمهورية الدومينيكان</option>
              <option value="الإكوادور">الإكوادور</option>
              <option value="مصر، الجمهورية العربية">
                مصر، الجمهورية العربية
              </option>
              <option value="السلفادور">السلفادور</option>
              <option value="غينيا الاستوائية">غينيا الاستوائية</option>
              <option value="إريتريا">إريتريا</option>
              <option value="إستونيا">إستونيا</option>
              <option value="إثيوبيا">إثيوبيا</option>
              <option value="فيجي">فيجي</option>
              <option value="فنلندا">فنلندا</option>
              <option value="فرنسا">فرنسا</option>
              <option value="غيانا الفرنسية">غيانا الفرنسية</option>
              <option value="غابون">غابون</option>
              <option value="غامبيا">غامبيا</option>
              <option value="جورجيا">جورجيا</option>
              <option value="ألمانيا">ألمانيا</option>
              <option value="غانا">غانا</option>
              <option value="اليونان">اليونان</option>
              <option value="غرينلاند">غرينلاند</option>
              <option value="غرينادا">غرينادا</option>
              <option value="غوام">غوام</option>
              <option value="جواتيمالا">جواتيمالا</option>
              <option value="غينيا">غينيا</option>
              <option value="غينيا بيساو">غينيا بيساو</option>
              <option value="غيانا">غيانا</option>
              <option value="هايتي">هايتي</option>
              <option value="هندوراس">هندوراس</option>
              <option value="منطقة هونغ كونغ الإدارية الخاصة، الصين">
                منطقة هونغ كونغ الإدارية الخاصة، الصين
              </option>
              <option value="أيسلندا">أيسلندا</option>
              <option value="الهند">الهند</option>
              <option value="إندونيسيا">إندونيسيا</option>
              <option value="إيران, الجمهورية الإسلامية">
                إيران, الجمهورية الإسلامية
              </option>
              <option value="العراق">العراق</option>
              <option value="أيرلندا">أيرلندا</option>
              <option value="اسرائيل">اسرائيل</option>
              <option value="ايطاليا">ايطاليا</option>
              <option value="جامايكا">جامايكا</option>
              <option value="اليابان">اليابان</option>
              <option value="جيرسي, جزر القنال">جيرسي, جزر القنال</option>
              <option value="الأردن">الأردن</option>
              <option value="كازاخستان">كازاخستان</option>
              <option value="كينيا">كينيا</option>
              <option value="كوريا ، ديموقراطي">كوريا ، ديموقراطي</option>
              <option value="جمهورية كوريا">جمهورية كوريا</option>
              <option value="كوسوفو">كوسوفو</option>
              <option value="الكويت">الكويت</option>
              <option value="جمهورية قيرغيزستان">جمهورية قيرغيزستان</option>
              <option value="جمهورية لاو الديمقراطية الشعبية">
                جمهورية لاو الديمقراطية الشعبية
              </option>
              <option value="لاتفيا">لاتفيا</option>
              <option value="لبنان">لبنان</option>
              <option value="ليسوتو">ليسوتو</option>
              <option value="ليبيريا">ليبيريا</option>
              <option value="ليبيا">ليبيا</option>
              <option value="ليشتنشتاين">ليشتنشتاين</option>
              <option value="لتوانيا">لتوانيا</option>
              <option value="لوكسمبورج">لوكسمبورج</option>
              <option value="مدغشقر">مدغشقر</option>
              <option value="ملاوي">ملاوي</option>
              <option value="ماليزيا">ماليزيا</option>
              <option value="ملديف">ملديف</option>
              <option value="مالي">مالي</option>
              <option value="مالطا">مالطا</option>
              <option value="جزر مارشال">جزر مارشال</option>
              <option value="مارتينيك">مارتينيك</option>
              <option value="موريتانيا">موريتانيا</option>
              <option value="المكسيك">المكسيك</option>
              <option value="مولدافيا">مولدافيا</option>
              <option value="موناكو">موناكو</option>
              <option value="منغوليا">منغوليا</option>
              <option value="المغرب">المغرب</option>
              <option value="موزمبيق">موزمبيق</option>
              <option value="ميانمار">ميانمار</option>
              <option value="ناميبيا">ناميبيا</option>
              <option value="ناورو">ناورو</option>
              <option value="نيبال">نيبال</option>
              <option value="هولندا">هولندا</option>
              <option value="نيوزيلندا">نيوزيلندا</option>
              <option value="نيكاراجوا">نيكاراجوا</option>
              <option value="النيجر">النيجر</option>
              <option value="نيجيريا">نيجيريا</option>
              <option value="نيوي">نيوي</option>
              <option value="النرويج">النرويج</option>
              <option value="عُمان">عُمان</option>
              <option value="باكستان">باكستان</option>
              <option value="بالاو">بالاو</option>
              <option value="بنما">بنما</option>
              <option value="بابوا غينيا الجديدة">بابوا غينيا الجديدة</option>
              <option value="باراجواي">باراجواي</option>
              <option value="بيرو">بيرو</option>
              <option value="الفلبين">الفلبين</option>
              <option value="بولندا">بولندا</option>
              <option value="البرتغال">البرتغال</option>
              <option value="بويرتوريكو">بويرتوريكو</option>
              <option value="قطر">قطر</option>
              <option value="رومانيا">رومانيا</option>
              <option value="الاتحاد الروسي">الاتحاد الروسي</option>
              <option value="رواندا">رواندا</option>
              <option value="ساموا">ساموا</option>
              <option value="سان مارينو">سان مارينو</option>
              <option value="سان تومي وبرينسيبي">سان تومي وبرينسيبي</option>
              <option value="المملكة العربية السعودية">
                المملكة العربية السعودية
              </option>
              <option value="السنغال">السنغال</option>
              <option value="صربيا">صربيا</option>
              <option value="سيشيل">سيشيل</option>
              <option value="سيراليون">سيراليون</option>
              <option value="سنغافورة">سنغافورة</option>
              <option value="سلوفاكيا">سلوفاكيا</option>
              <option value="سلوفينيا">سلوفينيا</option>
              <option value="جزر سليمان">جزر سليمان</option>
              <option value="الصومال">الصومال</option>
              <option value="جنوب أفريقيا">جنوب أفريقيا</option>
              <option value="جنوب السودان">جنوب السودان</option>
              <option value="إسبانيا">إسبانيا</option>
              <option value="سريلانكا">سريلانكا</option>
              <option value="السودان">السودان</option>
              <option value="سورينام">سورينام</option>
              <option value="السويد">السويد</option>
              <option value="سويسرا">سويسرا</option>
              <option value="الجمهورية العربية السورية">
                الجمهورية العربية السورية
              </option>
              <option value="تايوان، الصين">تايوان، الصين</option>
              <option value="طاجيكستان">طاجيكستان</option>
              <option value="تنزانيا">تنزانيا</option>
              <option value="تايلاند">تايلاند</option>
              <option value="تيمور الشرقية">تيمور الشرقية</option>
              <option value="توغو">توغو</option>
              <option value="تونغا">تونغا</option>
              <option value="ترنداد وتوباجو">ترنداد وتوباجو</option>
              <option value="تونس">تونس</option>
              <option value="تركيا">تركيا</option>
              <option value="تركمانستان">تركمانستان</option>
              <option value="توفالو">توفالو</option>
              <option value="أوغندا">أوغندا</option>
              <option value="أوكرانيا">أوكرانيا</option>
              <option value="الإمارات العربية المتحدة">
                الإمارات العربية المتحدة
              </option>
              <option value="المملكة المتحدة">المملكة المتحدة</option>
              <option value="الولايات المتحدة الأمريكية">
                الولايات المتحدة الأمريكية
              </option>
              <option value="اوروجواي">اوروجواي</option>
              <option value="أوزبكستان">أوزبكستان</option>
              <option value="فانواتو">فانواتو</option>
              <option value="فنزويلا">فنزويلا</option>
              <option value="فيتنام">فيتنام</option>
              <option value="جزر فيرجن (الولايات المتحدة)">
                جزر فيرجن (الولايات المتحدة)
              </option>
              <option value="اليمن, جمهورية">اليمن, جمهورية</option>
              <option value="زامبيا">زامبيا</option>
              <option value="زيمبابوي">زيمبابوي</option>
            </select>
          </label>
        </div>

        <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <div className="text-2xl">ما ذا يمثل لك الاستثمار في العراق؟</div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="نشاط أقوم به حاليا"
              name="entry.1234420270"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              نشاط أقوم به حاليا
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="نشاط أخطط للقيام به"
              name="entry.1234420270"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              نشاط أخطط للقيام به
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="هدف أعمل على دعمه وتشجيعه حاليا"
              name="entry.1234420270"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              هدف أعمل على دعمه وتشجيعه حاليا
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="هدف أخطط لتشجيعه ودعمه"
              name="entry.1234420270"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              هدف أخطط لتشجيعه ودعمه
            </label>
          </div>

          <div className="flex items-center mb-4">
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300 flex items-center gap-5"
            >
              اخرى:
              <input
                type="text"
                name="entry.707139989"
                placeholder="اكتب هنا..."
                className="bg-lighter dark:bg-darker p-3 rounded-xl w-full lg:focus:w-96 md:focus:w-full"
              />
            </label>
          </div>
        </div>

        <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <div className="text-2xl">
            ما الأمور التي تجد أنها تساعدك في تطوير نشاطك وتنفيذ خططك؟
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="القوانين والتشريعات الاقتصادية: قوانين الاستثمار- حقوق التملك- الضرائب وغيرها."
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              القوانين والتشريعات الاقتصادية: قوانين الاستثمار- حقوق التملك-
              الضرائب وغيرها.
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="السياسات التجارية والمالية: الرسوم الكمركية- الإعفاءات الضريبية- دعم المستثمرين والمشاريع الاستثمارية"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              السياسات التجارية والمالية: الرسوم الكمركية- الإعفاءات الضريبية-
              دعم المستثمرين والمشاريع الاستثمارية
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="الإجراءات الإدارية: سهولتها وتكاليفها"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              الإجراءات الإدارية: سهولتها وتكاليفها
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="الأجور: هيكل الأجور حسب القطاعات وحسب الخبرة والتحصيل الدراسي"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              الأجور: هيكل الأجور حسب القطاعات وحسب الخبرة والتحصيل الدراسي
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="المنتجات والخدمات: أسعارها وحجم الطلب عليها ومصادر توفيرها"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              المنتجات والخدمات: أسعارها وحجم الطلب عليها ومصادر توفيرها
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="المدخلات: الموردون لها وأسعارها"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              المدخلات: الموردون لها وأسعارها
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="خدمات الكهرباء والاتصالات والنقل: مدى توفرها وأسعارها"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              خدمات الكهرباء والاتصالات والنقل: مدى توفرها وأسعارها
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="البنى التحتية طرق- مخازن-موانئ- مطارات: مدى توفرها وتكاليف استخدامها"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              البنى التحتية طرق- مخازن-موانئ- مطارات: مدى توفرها وتكاليف
              استخدامها
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="مدى توفر الخدمات المالية والمصرفية"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              مدى توفر الخدمات المالية والمصرفية
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="مدى توفر العمالة الماهرة والمحترفة"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              مدى توفر العمالة الماهرة والمحترفة
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Governmental"
              type="radio"
              value="المنافسون: عددهم وإمكاناتهم الاقتصادية"
              name="entry.1180658350"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              المنافسون: عددهم وإمكاناتهم الاقتصادية
            </label>
          </div>

          <div className="flex items-center mb-4">
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300 flex items-center gap-5"
            >
              اخرى:
              <input
                type="text"
                name="entry.1336555034"
                placeholder="اكتب هنا..."
                className="bg-lighter dark:bg-darker p-3 rounded-xl w-full lg:focus:w-96 md:focus:w-full"
              />
            </label>
          </div>
        </div>

        <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <div className="text-2xl">ما هي احتياجاتك البحثية؟</div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="تحديد الفرص الاستثمارية"
              name="entry.795808512"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              تحديد الفرص الاستثمارية
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="معرفة مدى ملائمة بيئة معينة للأنشطة الاستثمارية"
              name="entry.795808512"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              معرفة جدوى مشاريع معينة
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="معرفة مدى ملائمة بيئة معينة للأنشطة الاستثمارية"
              name="entry.795808512"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              معرفة مدى ملائمة بيئة معينة للأنشطة الاستثمارية
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="معرفة اتجاهات الطلب في السوق"
              name="entry.795808512"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              معرفة اتجاهات الطلب في السوق
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="معرفة المنافسين"
              name="entry.795808512"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              معرفة المنافسين
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="معرفة مستويات المعيشة"
              name="entry.795808512"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              معرفة مستويات المعيشة
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="Private"
              type="radio"
              value="معرفة هيكل قوة العمل"
              name="entry.795808512"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Private"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              معرفة هيكل قوة العمل
            </label>
          </div>

          <div className="flex items-center mb-4">
            <label
              htmlFor="Governmental"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300 flex items-center gap-5"
            >
              اخرى:
              <input
                type="text"
                name="entry.648950733"
                placeholder="اكتب هنا..."
                className="bg-lighter dark:bg-darker p-3 rounded-xl w-full lg:focus:w-96 md:focus:w-full"
              />
            </label>
          </div>
        </div>

        <div className="bg-light dark:bg-dark flex flex-col gap-8 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <label htmlFor="">
            {" "}
            <div className="text-2xl">معلومات عن المؤسسة (إختياري)</div>
            <input
              type="text"
              name="entry.855057249"
              placeholder="اجابتك..."
              className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
            />
          </label>
        </div>

        <div className="bg-light hover:bg-light/50 dark:bg-dark dark:hover:bg-dark/50 cursor-pointer flex flex-col gap-8 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2 font-SFAr">
          <input
            type="submit"
            value="أرسال"
            className="text-3xl cursor-pointer font-bold"
          />
        </div>
      </form>
    </main>
  );
}
