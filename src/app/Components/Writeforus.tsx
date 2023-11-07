import React from "react";
const writecontent = [
  {
    title: "Write for us",
    paragraph: [
      {
        paragraphs:
          "WOWally welcomes guest posts related with our niche, i.e, biographies, life stories of famous personalities and those who are not famous yet have made huge impact in our lives.",
      },
      {
        paragraphs:
          "WOWally welcomes guest posts related with our niche, i.e, biographies, life stories of famous personalities and those who are not famous yet have made huge impact in our lives.",
      },
      {
        paragraphs:
          "So, what are the benefits of guest blogging with us? You will get 1 permanent back link in the content and your blog will get exposure to our wide readers.",
      },
    ],

    termstitle: "Terms and Conditon",
    terms: [
      {
        termsnamelist:
          "We only accept the guest articles on the mentioned niches our site entertains. The article should be able to provide useful information with link. The article shouldn’t stand out like an advertisement or convey marketing message to our readers regarding any product or company.",
      },
      {
        termsnamelist:
          "It would be great if your article is simple, readable and without any grammar errors.",
      },
      {
        termsnamelist: "Your article must consist at least 600 words.",
      },
      {
        termsnamelist:
          "Your article must be 100 % original with no traces of plagiarism.",
      },
      {
        termsnamelist:
          "If your article is based on any sources, please cite the authentic source. And please keep in mind to not use any content that would humiliate or hurt anyone’s sentiments.",
      },
      {
        termsnamelist:
          "If your article is based on any sources, please cite the authentic source. And please keep in mind to not use any content that would humiliate or hurt anyone’s sentiments.",
      },
      {
        termsnamelist:
          "You can also provide images (max two) related with the content along with the source.",
      },
      {
        termsnamelist:
          "You will get permanent back link in or beyond the second paragraph of your article. We do not provide back link in the first para.",
      },
      {
        termsnamelist:
          "If you are ok with all the terms and agree to send guest posts in the site, please be aware that by doing so you are not a part of the company’s content team or can hold yourself as the member of the blogsite or company.",
      },
      {
        termsnamelist:
          "All being said, News Website reserves the right to reject or accept your posts.",
      },
    ],
  },
];
const Writeforus = () => {
  return (
    <div className="container mx-auto py-6 px-3 md:px-0">
      {writecontent.map((val: any, index: number) => {
        return (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black py-4 text-left">
              {val?.title}
            </h2>
            <div>
              {val?.paragraph.map((para: any, index: number) => {
                return (
                  <p className="text-base py-2 text-black" key={index}>
                    {para?.paragraphs}
                  </p>
                );
              })}
            </div>
            <h1 className="text-2xl md:text-4xl py-5 text-black font-bold">
              {val.termstitle}
            </h1>
            <div className="my-1 px-3">
              <ul style={{ listStyleType: "disc" }}>
                {val?.terms?.map((terms: any, index: number) => {
                  return (
                    <li className="text-sm text-black py-1" key={index}>
                      {terms.termsnamelist}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Writeforus;
