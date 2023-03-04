export interface EastGate {
  dictionary: {
    web: {
      name: string;
      description: string;
      slogan: string;
      languages: {
        en: string;
        ar: string;
        ku: string;
      };
      nav: {
        home: "Home";
        services: "Services";
        blog: "Blog";
        about: "About";
        contact: "Contact";
      };
      footer: {
        text: string;
      };
    };
    buttons: {
      next: string;
      prev: string;
      submit: string;
    };
    surveryHead: {
      title: string;
      p1: string;
      p2: string;
    };
    questions: {
      q1: {
        title: string;
        placeHolder: string;
      };
      q2: {
        title: string;
        radio: {
          r1: string;
          r2: string;
          r3: string;
          r4: string;
          other: string;
        };
        placeHolder: string;
      };
      q3: {
        title: string;
        placeHolder: string;
      };
      q4: {
        title: string;
        Countires: object;
      };
      q5: {
        title: string;
        radio: {
          r1: string;
          r2: string;
          r3: string;
          r4: string;
          other: string;
        };
      };
      q6: {
        title: string;
        r1: string;
        r2: string;
        r3: string;
        r4: string;
        r5: string;
        r6: string;
        r7: string;
        r8: string;
        r9: string;
        r10: string;
        r11: string;
      };
      q7: {
        title: string;
        r1: string;
        r2: string;
        r3: string;
        r4: string;
        r5: string;
        r6: string;
        r7: string;
      };
      q8: {
        title: string;
        r1: string;
      };
    };
    other: string;
    placeHolders: {
      other: string;
      submit: string;
    };
    status: {
      success: string;
      error: string;
    };
  };
}
