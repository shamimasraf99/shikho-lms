export const getElementorTemplate = () => {
  return {
    version: "0.4",
    title: "Shikho Homepage Template",
    type: "page",
    content: [
      {
        id: "hero_section",
        elType: "section",
        settings: {
          background_background: "classic",
          background_color: "#eff6ff"
        },
        elements: [
          {
            id: "hero_column_wrapper",
            elType: "column",
            settings: {
              _column_size: 100
            },
            elements: [
              {
                id: "hero_inner_section",
                elType: "section",
                isInner: true,
                settings: {},
                elements: [
                  {
                    id: "hero_left_col",
                    elType: "column",
                    settings: { _column_size: 50 },
                    elements: [
                      {
                        id: "hero_heading",
                        elType: "widget",
                        widgetType: "heading",
                        settings: {
                          title: "আপনার স্বপ্নের ক্যারিয়ার গড়ার সেরা ঠিকানা",
                          header_size: "h1"
                        }
                      },
                      {
                        id: "hero_text",
                        elType: "widget",
                        widgetType: "text-editor",
                        settings: {
                          editor: "<p>দক্ষ মেন্টরদের সাথে প্রোগ্রামিং, ডিজাইন, মার্কেটিং এবং আরও অনেক কিছু শিখুন। আজই শুরু করুন আপনার লার্নিং জার্নি।</p>"
                        }
                      },
                      {
                        id: "hero_button",
                        elType: "widget",
                        widgetType: "button",
                        settings: {
                          text: "কোর্স দেখুন",
                          link: { url: "#courses" },
                          button_type: "primary"
                        }
                      }
                    ]
                  },
                  {
                    id: "hero_right_col",
                    elType: "column",
                    settings: { _column_size: 50 },
                    elements: [
                      {
                        id: "hero_image",
                        elType: "widget",
                        widgetType: "image",
                        settings: {
                          image: { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "features_section",
        elType: "section",
        settings: { background_color: "#ffffff" },
        elements: [
          {
            id: "features_col",
            elType: "column",
            settings: { _column_size: 100 },
            elements: [
              {
                id: "features_heading",
                elType: "widget",
                widgetType: "heading",
                settings: {
                  title: "কেন আমাদের বেছে নেবেন?",
                  align: "center"
                }
              },
              {
                id: "features_inner",
                elType: "section",
                isInner: true,
                settings: {},
                elements: [
                  {
                    id: "feat_1",
                    elType: "column",
                    settings: { _column_size: 25 },
                    elements: [
                      {
                        id: "icon_box_1",
                        elType: "widget",
                        widgetType: "icon-box",
                        settings: {
                          title_text: "উন্নত মানের ভিডিও লেকচার",
                          description_text: "HD কোয়ালিটির ভিডিও এবং প্র্যাকটিক্যাল প্রজেক্ট ভিত্তিক শিক্ষা।"
                        }
                      }
                    ]
                  },
                  {
                    id: "feat_2",
                    elType: "column",
                    settings: { _column_size: 25 },
                    elements: [
                      {
                        id: "icon_box_2",
                        elType: "widget",
                        widgetType: "icon-box",
                        settings: {
                          title_text: "সার্টিফিকেট প্রদান",
                          description_text: "কোর্স শেষে দক্ষ হওয়ার প্রমাণ হিসেবে প্রফেশনাল সার্টিফিকেট।"
                        }
                      }
                    ]
                  },
                  {
                    id: "feat_3",
                    elType: "column",
                    settings: { _column_size: 25 },
                    elements: [
                      {
                        id: "icon_box_3",
                        elType: "widget",
                        widgetType: "icon-box",
                        settings: {
                          title_text: "লাইফটাইম এক্সেস",
                          description_text: "একবার এনরোল করে আজীবন কোর্স মেটেরিয়াল ব্যবহারের সুযোগ।"
                        }
                      }
                    ]
                  },
                  {
                    id: "feat_4",
                    elType: "column",
                    settings: { _column_size: 25 },
                    elements: [
                      {
                        id: "icon_box_4",
                        elType: "widget",
                        widgetType: "icon-box",
                        settings: {
                          title_text: "এক্সপার্ট মেন্টর সাপোর্ট",
                          description_text: "যেকোনো সমস্যায় মেন্টরদের কাছ থেকে সরাসরি সাহায্য পাওয়ার সুবিধা।"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "courses_section",
        elType: "section",
        settings: {},
        elements: [
          {
            id: "courses_col",
            elType: "column",
            settings: { _column_size: 100 },
            elements: [
              {
                id: "courses_heading",
                elType: "widget",
                widgetType: "heading",
                settings: {
                  title: "আমাদের টপ-রেটেড কোর্সসমূহ",
                  align: "center"
                }
              },
              {
                id: "courses_grid",
                elType: "section",
                isInner: true,
                elements: [
                  {
                     id: "course_1",
                     elType: "column",
                     settings: { _column_size: 25 },
                     elements: [
                        {
                           id: "img_box_c1",
                           elType: "widget",
                           widgetType: "image-box",
                           settings: {
                              title_text: "ওয়েব ডেভেলপমেন্ট",
                              image: { url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159" }
                           }
                        }
                     ]
                  },
                  {
                    id: "course_2",
                    elType: "column",
                    settings: { _column_size: 25 },
                    elements: [
                       {
                          id: "img_box_c2",
                          elType: "widget",
                          widgetType: "image-box",
                          settings: {
                             title_text: "গ্রাফিক ডিজাইন",
                             image: { url: "https://images.unsplash.com/photo-1626785774573-4b7993143a26" }
                          }
                       }
                    ]
                 },
                 {
                  id: "course_3",
                  elType: "column",
                  settings: { _column_size: 25 },
                  elements: [
                     {
                        id: "img_box_c3",
                        elType: "widget",
                        widgetType: "image-box",
                        settings: {
                           title_text: "ডিজিটাল মার্কেটিং",
                           image: { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" }
                        }
                     }
                  ]
               },
               {
                id: "course_4",
                elType: "column",
                settings: { _column_size: 25 },
                elements: [
                   {
                      id: "img_box_c4",
                      elType: "widget",
                      widgetType: "image-box",
                      settings: {
                         title_text: "পাইথন প্রোগ্রামিং",
                         image: { url: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935" }
                      }
                   }
                ]
             }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
};