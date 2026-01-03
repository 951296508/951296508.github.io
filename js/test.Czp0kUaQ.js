import { d as defineComponent, r as ref, I as watch, c as computed, b1 as useDateFormat, aJ as useUserStore, b2 as useTransition, o as onMounted, as as resolveComponent, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, C as createBaseVNode, i as unref, F as toDisplayString, a4 as createTextVNode, E as ElIcon, b3 as connection_default, b4 as failed_default, e as createBlock, h as createCommentVNode, n as normalizeClass, aA as isRef, P as Fragment, Q as renderList } from "./index.DiKldNkq.js";
import { E as ElScrollbar } from "./scrollbar.Blpc_xoC.js";
import { u as useOnlineCount, _ as __unplugin_components_0, E as ElSkeleton, a as ElSkeletonItem, b as _sfc_main$1, c as ElTimeline, d as ElTimelineItem } from "./index.BmWFbBEN.js";
import { E as ElText } from "./text.B73Pg5-w.js";
import { E as ElRadioGroup, b as ElRadioButton } from "./radio-group.C_6xGb_l.js";
/* empty css                      */
import { a as ElCol, E as ElRow } from "./col.CXQvsEz8.js";
/* empty css             */
import { E as ElCard } from "./card.B9OInSdJ.js";
import { E as ElDivider } from "./divider.ON34SBo8.js";
import { E as ElLink } from "./link.CDhhkg62.js";
import { L as LogAPI } from "./log-api.CV-LA0kX.js";
import { f as formatGrowthRate } from "./index.DZZZOFI8.js";
import { E as ElTag } from "./index.BGAgbk7l.js";
import { d as dayjs } from "./dayjs.min.VWSJXAC1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./error.BVJkE67s.js";
import "./index.BHkhC2vI.js";
import "./useStomp.CdyqBI78.js";
import "./use-form-common-props.lTDinMtp.js";
import "./event.BZTOGHfp.js";
import "./index.Dk-590RJ.js";
import "./omit.DUWLslLp.js";
import "./_baseClone.BqkftclC.js";
const _hoisted_1 = { class: "dashboard-container" };
const _hoisted_2 = { class: "flex flex-wrap" };
const _hoisted_3 = { class: "flex-1 flex items-start" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "ml-5" };
const _hoisted_6 = { class: "hidden sm:block" };
const _hoisted_7 = { class: "flex items-end space-x-6" };
const _hoisted_8 = { class: "font-bold color-#ff9a2e text-sm flex items-center" };
const _hoisted_9 = { class: "mt-3 whitespace-nowrap" };
const _hoisted_10 = { class: "font-bold color-#4080ff text-sm flex items-center" };
const _hoisted_11 = { class: "mt-3 whitespace-nowrap" };
const _hoisted_12 = { class: "font-bold color-#f76560 text-sm flex items-center" };
const _hoisted_13 = { class: "mt-3 whitespace-nowrap" };
const _hoisted_14 = { class: "w-full sm:hidden mt-3" };
const _hoisted_15 = { class: "flex justify-end space-x-4 overflow-x-auto" };
const _hoisted_16 = { class: "flex-x-between" };
const _hoisted_17 = { class: "flex-x-between mt-2 flex-1" };
const _hoisted_18 = { class: "flex-y-center" };
const _hoisted_19 = { class: "text-lg transition-all duration-300 hover:scale-110" };
const _hoisted_20 = {
  key: 0,
  class: "ml-2 text-xs text-[#67c23a]"
};
const _hoisted_21 = {
  key: 1,
  class: "ml-2 text-xs text-[#f56c6c]"
};
const _hoisted_22 = { class: "flex-x-between mt-2 text-sm text-gray" };
const _hoisted_23 = { class: "flex-x-between" };
const _hoisted_24 = { class: "mt-5 flex-x-between" };
const _hoisted_25 = { class: "flex-x-between" };
const _hoisted_26 = { class: "flex-x-between mt-2 flex-1" };
const _hoisted_27 = { class: "flex-y-center" };
const _hoisted_28 = { class: "text-lg" };
const _hoisted_29 = { class: "flex-x-between mt-2 text-sm text-gray" };
const _hoisted_30 = { class: "flex-x-between" };
const _hoisted_31 = { class: "mt-5 flex-x-between" };
const _hoisted_32 = { class: "flex-x-between" };
const _hoisted_33 = { class: "flex-x-between mt-2 flex-1" };
const _hoisted_34 = { class: "flex-y-center" };
const _hoisted_35 = { class: "text-lg" };
const _hoisted_36 = { class: "flex-x-between mt-2 text-sm text-gray" };
const _hoisted_37 = { class: "flex-x-between" };
const _hoisted_38 = { class: "flex-x-between" };
const _hoisted_39 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Dashboard",
    inheritAttrs: false
  },
  __name: "test",
  setup(__props) {
    const { onlineUserCount, lastUpdateTime, isConnected } = useOnlineCount();
    const previousCount = ref(0);
    watch(onlineUserCount, (newCount, oldCount) => {
      if (oldCount > 0) {
        previousCount.value = oldCount;
      }
    });
    const formattedTime = computed(() => {
      if (!lastUpdateTime.value) return "--";
      return useDateFormat(lastUpdateTime, "HH:mm:ss").value;
    });
    const userStore = useUserStore();
    const vesionList = ref([
      {
        id: "1",
        title: "v3.0.0",
        date: "2025-06-06 00:00:00",
        content: "布局重写，代码规范重构。",
        link: "https://gitee.com/youlaiorg/vue3-element-admin/releases",
        tag: "里程碑"
      },
      {
        id: "2",
        title: "v2.4.0",
        date: "2021-09-01 00:00:00",
        content: "实现基础框架搭建，包含权限管理、路由系统等核心功能。",
        link: "https://gitee.com/youlaiorg/vue3-element-admin/releases",
        tag: "里程碑"
      },
      {
        id: "3",
        title: "v2.4.0",
        date: "2021-09-01 00:00:00",
        content: "实现基础框架搭建，包含权限管理、路由系统等核心功能。",
        link: "https://gitee.com/youlaiorg/vue3-element-admin/releases",
        tag: "里程碑"
      }
    ]);
    const currentDate = /* @__PURE__ */ new Date();
    const greetings = computed(() => {
      const hours = currentDate.getHours();
      const nickname = userStore.userInfo.nickname;
      if (hours >= 6 && hours < 8) {
        return "晨起披衣出草堂，轩窗已自喜微凉🌅！";
      } else if (hours >= 8 && hours < 12) {
        return `上午好，${nickname}！`;
      } else if (hours >= 12 && hours < 18) {
        return `下午好，${nickname}！`;
      } else if (hours >= 18 && hours < 24) {
        return `晚上好，${nickname}！`;
      } else {
        return "偷偷向银河要了一把碎星，只等你闭上眼睛撒入你的梦中，晚安🌛！";
      }
    });
    const visitStatsLoading = ref(true);
    const visitStatsData = ref({
      todayUvCount: 0,
      uvGrowthRate: 0,
      totalUvCount: 0,
      todayPvCount: 0,
      pvGrowthRate: 0,
      totalPvCount: 0
    });
    const transitionUvCount = useTransition(
      computed(() => visitStatsData.value.todayUvCount),
      {
        duration: 1e3,
        transition: [0.25, 0.1, 0.25, 1]
        // CSS cubic-bezier
      }
    );
    const transitionTotalUvCount = useTransition(
      computed(() => visitStatsData.value.totalUvCount),
      {
        duration: 1200,
        transition: [0.25, 0.1, 0.25, 1]
      }
    );
    const transitionPvCount = useTransition(
      computed(() => visitStatsData.value.todayPvCount),
      {
        duration: 1e3,
        transition: [0.25, 0.1, 0.25, 1]
      }
    );
    const transitionTotalPvCount = useTransition(
      computed(() => visitStatsData.value.totalPvCount),
      {
        duration: 1200,
        transition: [0.25, 0.1, 0.25, 1]
      }
    );
    const visitTrendDateRange = ref(7);
    const visitTrendChartOptions = ref();
    const fetchVisitStatsData = () => {
      LogAPI.getVisitStats().then((data) => {
        visitStatsData.value = data;
      }).finally(() => {
        visitStatsLoading.value = false;
      });
    };
    const fetchVisitTrendData = () => {
      const startDate = dayjs().subtract(visitTrendDateRange.value - 1, "day").toDate();
      const endDate = /* @__PURE__ */ new Date();
      LogAPI.getVisitTrend({
        startDate: dayjs(startDate).format("YYYY-MM-DD"),
        endDate: dayjs(endDate).format("YYYY-MM-DD")
      }).then((data) => {
        updateVisitTrendChartOptions(data);
      });
    };
    const updateVisitTrendChartOptions = (data) => {
      visitTrendChartOptions.value = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["浏览量(PV)", "访客数(UV)"],
          bottom: 0
        },
        grid: {
          left: "1%",
          right: "5%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: data.dates
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed"
            }
          }
        },
        series: [
          {
            name: "浏览量(PV)",
            type: "line",
            data: data.pvList,
            areaStyle: {
              color: "rgba(64, 158, 255, 0.1)"
            },
            smooth: true,
            itemStyle: {
              color: "#4080FF"
            },
            lineStyle: {
              color: "#4080FF"
            }
          },
          {
            name: "访客数(UV)",
            type: "line",
            data: data.ipList,
            areaStyle: {
              color: "rgba(103, 194, 58, 0.1)"
            },
            smooth: true,
            itemStyle: {
              color: "#67C23A"
            },
            lineStyle: {
              color: "#67C23A"
            }
          }
        ]
      };
    };
    const computeGrowthRateClass = (growthRate) => {
      if (!growthRate) {
        return "text-[--el-color-info]";
      }
      if (growthRate > 0) {
        return "text-[--el-color-danger]";
      } else if (growthRate < 0) {
        return "text-[--el-color-success]";
      } else {
        return "text-[--el-color-info]";
      }
    };
    watch(
      () => visitTrendDateRange.value,
      () => {
        fetchVisitTrendData();
      },
      { immediate: true }
    );
    onMounted(() => {
      fetchVisitStatsData();
    });
    return (_ctx, _cache) => {
      const _component_github_corner = __unplugin_components_0;
      const _component_Folder = resolveComponent("Folder");
      const _component_el_icon = ElIcon;
      const _component_el_link = ElLink;
      const _component_el_divider = ElDivider;
      const _component_Document = resolveComponent("Document");
      const _component_VideoCamera = resolveComponent("VideoCamera");
      const _component_el_card = ElCard;
      const _component_el_tag = ElTag;
      const _component_el_col = ElCol;
      const _component_el_skeleton_item = ElSkeletonItem;
      const _component_Top = resolveComponent("Top");
      const _component_Bottom = resolveComponent("Bottom");
      const _component_el_skeleton = ElSkeleton;
      const _component_el_row = ElRow;
      const _component_el_radio_button = ElRadioButton;
      const _component_el_radio_group = ElRadioGroup;
      const _component_ECharts = _sfc_main$1;
      const _component_TopRight = resolveComponent("TopRight");
      const _component_el_text = ElText;
      const _component_el_timeline_item = ElTimelineItem;
      const _component_el_timeline = ElTimeline;
      const _component_el_scrollbar = ElScrollbar;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_github_corner, { class: "github-corner" }),
        createVNode(_component_el_card, {
          shadow: "never",
          class: "mt-2"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("img", {
                  class: "w80px h80px rounded-full",
                  src: unref(userStore).userInfo.avatar + "?imageView2/1/w/80/h/80"
                }, null, 8, _hoisted_4),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("p", null, toDisplayString(unref(greetings)), 1),
                  _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-sm text-gray" }, "今日天气晴朗，气温在15℃至25℃之间，东南风。", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(_component_el_icon, { class: "mr-2px" }, {
                        default: withCtx(() => [
                          createVNode(_component_Folder)
                        ]),
                        _: 1
                      }),
                      _cache[2] || (_cache[2] = createTextVNode(" 仓库 ", -1))
                    ]),
                    createBaseVNode("div", _hoisted_9, [
                      createVNode(_component_el_link, {
                        href: "https://gitee.com/youlaiorg/vue3-element-admin",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [..._cache[3] || (_cache[3] = [
                          createBaseVNode("div", { class: "i-svg:gitee text-lg color-#F76560" }, null, -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_el_divider, { direction: "vertical" }),
                      createVNode(_component_el_link, {
                        href: "https://github.com/youlaitech/vue3-element-admin",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [..._cache[4] || (_cache[4] = [
                          createBaseVNode("div", { class: "i-svg:github text-lg color-#4080FF" }, null, -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_el_divider, { direction: "vertical" }),
                      createVNode(_component_el_link, {
                        href: "https://gitcode.com/youlai/vue3-element-admin",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [..._cache[5] || (_cache[5] = [
                          createBaseVNode("div", { class: "i-svg:gitcode text-lg color-#FF9A2E" }, null, -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_10, [
                      createVNode(_component_el_icon, { class: "mr-2px" }, {
                        default: withCtx(() => [
                          createVNode(_component_Document)
                        ]),
                        _: 1
                      }),
                      _cache[6] || (_cache[6] = createTextVNode(" 文档 ", -1))
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      createVNode(_component_el_link, {
                        href: "https://juejin.cn/post/7228990409909108793",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [..._cache[7] || (_cache[7] = [
                          createBaseVNode("div", { class: "i-svg:juejin text-lg" }, null, -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_el_divider, { direction: "vertical" }),
                      createVNode(_component_el_link, {
                        href: "https://youlai.blog.csdn.net/article/details/130191394",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [..._cache[8] || (_cache[8] = [
                          createBaseVNode("div", { class: "i-svg:csdn text-lg" }, null, -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(_component_el_divider, { direction: "vertical" }),
                      createVNode(_component_el_link, {
                        href: "https://www.cnblogs.com/haoxianrui/p/17331952.html",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [..._cache[9] || (_cache[9] = [
                          createBaseVNode("div", { class: "i-svg:cnblogs text-lg" }, null, -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(_component_el_icon, { class: "mr-2px" }, {
                        default: withCtx(() => [
                          createVNode(_component_VideoCamera)
                        ]),
                        _: 1
                      }),
                      _cache[10] || (_cache[10] = createTextVNode(" 视频 ", -1))
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(_component_el_link, {
                        href: "https://www.bilibili.com/video/BV1eFUuYyEFj",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [..._cache[11] || (_cache[11] = [
                          createBaseVNode("div", { class: "i-svg:bilibili text-lg" }, null, -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createVNode(_component_el_link, {
                    href: "https://gitee.com/youlaiorg/vue3-element-admin",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [..._cache[12] || (_cache[12] = [
                      createBaseVNode("div", { class: "i-svg:gitee text-lg color-#F76560" }, null, -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_link, {
                    href: "https://github.com/youlaitech/vue3-element-admin",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [..._cache[13] || (_cache[13] = [
                      createBaseVNode("div", { class: "i-svg:github text-lg color-#4080FF" }, null, -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_link, {
                    href: "https://gitcode.com/youlai/vue3-element-admin",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [..._cache[14] || (_cache[14] = [
                      createBaseVNode("div", { class: "i-svg:gitcode text-lg color-#FF9A2E" }, null, -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_link, {
                    href: "https://juejin.cn/post/7228990409909108793",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [..._cache[15] || (_cache[15] = [
                      createBaseVNode("div", { class: "i-svg:juejin text-lg" }, null, -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_link, {
                    href: "https://youlai.blog.csdn.net/article/details/130191394",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [..._cache[16] || (_cache[16] = [
                      createBaseVNode("div", { class: "i-svg:csdn text-lg" }, null, -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_link, {
                    href: "https://www.cnblogs.com/haoxianrui/p/17331952.html",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [..._cache[17] || (_cache[17] = [
                      createBaseVNode("div", { class: "i-svg:cnblogs text-lg" }, null, -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_link, {
                    href: "https://www.bilibili.com/video/BV1eFUuYyEFj",
                    target: "_blank"
                  }, {
                    default: withCtx(() => [..._cache[18] || (_cache[18] = [
                      createBaseVNode("div", { class: "i-svg:bilibili text-lg" }, null, -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(_component_el_row, {
          gutter: 10,
          class: "mt-5"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_col, {
              span: 8,
              xs: 24,
              class: "mb-xs-3"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_card, {
                  shadow: "never",
                  class: "h-full flex flex-col"
                }, {
                  header: withCtx(() => [
                    createBaseVNode("div", _hoisted_16, [
                      _cache[20] || (_cache[20] = createBaseVNode("span", { class: "text-gray" }, "在线用户", -1)),
                      createVNode(_component_el_tag, {
                        type: "danger",
                        size: "small"
                      }, {
                        default: withCtx(() => [..._cache[19] || (_cache[19] = [
                          createTextVNode("实时", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("span", _hoisted_19, toDisplayString(unref(onlineUserCount)), 1),
                        unref(isConnected) ? (openBlock(), createElementBlock("span", _hoisted_20, [
                          createVNode(_component_el_icon, null, {
                            default: withCtx(() => [
                              createVNode(unref(connection_default))
                            ]),
                            _: 1
                          }),
                          _cache[21] || (_cache[21] = createTextVNode(" 已连接 ", -1))
                        ])) : (openBlock(), createElementBlock("span", _hoisted_21, [
                          createVNode(_component_el_icon, null, {
                            default: withCtx(() => [
                              createVNode(unref(failed_default))
                            ]),
                            _: 1
                          }),
                          _cache[22] || (_cache[22] = createTextVNode(" 未连接 ", -1))
                        ]))
                      ]),
                      _cache[23] || (_cache[23] = createBaseVNode("div", { class: "i-svg:people w-8 h-8 animate-[pulse_2s_infinite]" }, null, -1))
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      _cache[24] || (_cache[24] = createBaseVNode("span", null, "更新时间", -1)),
                      createBaseVNode("span", null, toDisplayString(unref(formattedTime)), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_col, {
              span: 8,
              xs: 24,
              class: "mb-xs-3"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_skeleton, {
                  loading: unref(visitStatsLoading),
                  rows: 5,
                  animated: ""
                }, {
                  template: withCtx(() => [
                    createVNode(_component_el_card, null, {
                      header: withCtx(() => [
                        createBaseVNode("div", null, [
                          createVNode(_component_el_skeleton_item, {
                            variant: "h3",
                            style: { "width": "40%" }
                          }),
                          createVNode(_component_el_skeleton_item, {
                            variant: "rect",
                            style: { "float": "right", "width": "1em", "height": "1em" }
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_23, [
                          createVNode(_component_el_skeleton_item, {
                            variant: "text",
                            style: { "width": "30%" }
                          }),
                          createVNode(_component_el_skeleton_item, {
                            variant: "circle",
                            style: { "width": "2em", "height": "2em" }
                          })
                        ]),
                        createBaseVNode("div", _hoisted_24, [
                          createVNode(_component_el_skeleton_item, {
                            variant: "text",
                            style: { "width": "50%" }
                          }),
                          createVNode(_component_el_skeleton_item, {
                            variant: "text",
                            style: { "width": "1em" }
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    !unref(visitStatsLoading) ? (openBlock(), createBlock(_component_el_card, {
                      key: 0,
                      shadow: "never",
                      class: "h-full flex flex-col"
                    }, {
                      header: withCtx(() => [
                        createBaseVNode("div", _hoisted_25, [
                          _cache[26] || (_cache[26] = createBaseVNode("span", { class: "text-gray" }, "访客数(UV)", -1)),
                          createVNode(_component_el_tag, {
                            type: "success",
                            size: "small"
                          }, {
                            default: withCtx(() => [..._cache[25] || (_cache[25] = [
                              createTextVNode("日", -1)
                            ])]),
                            _: 1
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_26, [
                          createBaseVNode("div", _hoisted_27, [
                            createBaseVNode("span", _hoisted_28, toDisplayString(Math.round(unref(transitionUvCount))), 1),
                            createBaseVNode("span", {
                              class: normalizeClass([
                                "text-xs",
                                "ml-2",
                                computeGrowthRateClass(unref(visitStatsData).uvGrowthRate)
                              ])
                            }, [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  unref(visitStatsData).uvGrowthRate > 0 ? (openBlock(), createBlock(_component_Top, { key: 0 })) : unref(visitStatsData).uvGrowthRate < 0 ? (openBlock(), createBlock(_component_Bottom, { key: 1 })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createTextVNode(" " + toDisplayString(unref(formatGrowthRate)(unref(visitStatsData).uvGrowthRate)), 1)
                            ], 2)
                          ]),
                          _cache[27] || (_cache[27] = createBaseVNode("div", { class: "i-svg:visitor w-8 h-8" }, null, -1))
                        ]),
                        createBaseVNode("div", _hoisted_29, [
                          _cache[28] || (_cache[28] = createBaseVNode("span", null, "总访客数", -1)),
                          createBaseVNode("span", null, toDisplayString(Math.round(unref(transitionTotalUvCount))), 1)
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            }),
            createVNode(_component_el_col, {
              span: 8,
              xs: 24
            }, {
              default: withCtx(() => [
                createVNode(_component_el_skeleton, {
                  loading: unref(visitStatsLoading),
                  rows: 5,
                  animated: ""
                }, {
                  template: withCtx(() => [
                    createVNode(_component_el_card, null, {
                      header: withCtx(() => [
                        createBaseVNode("div", null, [
                          createVNode(_component_el_skeleton_item, {
                            variant: "h3",
                            style: { "width": "40%" }
                          }),
                          createVNode(_component_el_skeleton_item, {
                            variant: "rect",
                            style: { "float": "right", "width": "1em", "height": "1em" }
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_30, [
                          createVNode(_component_el_skeleton_item, {
                            variant: "text",
                            style: { "width": "30%" }
                          }),
                          createVNode(_component_el_skeleton_item, {
                            variant: "circle",
                            style: { "width": "2em", "height": "2em" }
                          })
                        ]),
                        createBaseVNode("div", _hoisted_31, [
                          createVNode(_component_el_skeleton_item, {
                            variant: "text",
                            style: { "width": "50%" }
                          }),
                          createVNode(_component_el_skeleton_item, {
                            variant: "text",
                            style: { "width": "1em" }
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    !unref(visitStatsLoading) ? (openBlock(), createBlock(_component_el_card, {
                      key: 0,
                      shadow: "never",
                      class: "h-full flex flex-col"
                    }, {
                      header: withCtx(() => [
                        createBaseVNode("div", _hoisted_32, [
                          _cache[30] || (_cache[30] = createBaseVNode("span", { class: "text-gray" }, "浏览量(PV)", -1)),
                          createVNode(_component_el_tag, {
                            type: "primary",
                            size: "small"
                          }, {
                            default: withCtx(() => [..._cache[29] || (_cache[29] = [
                              createTextVNode("日", -1)
                            ])]),
                            _: 1
                          })
                        ])
                      ]),
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_33, [
                          createBaseVNode("div", _hoisted_34, [
                            createBaseVNode("span", _hoisted_35, toDisplayString(Math.round(unref(transitionPvCount))), 1),
                            createBaseVNode("span", {
                              class: normalizeClass([
                                "text-xs",
                                "ml-2",
                                computeGrowthRateClass(unref(visitStatsData).pvGrowthRate)
                              ])
                            }, [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  unref(visitStatsData).pvGrowthRate > 0 ? (openBlock(), createBlock(_component_Top, { key: 0 })) : unref(visitStatsData).pvGrowthRate < 0 ? (openBlock(), createBlock(_component_Bottom, { key: 1 })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createTextVNode(" " + toDisplayString(unref(formatGrowthRate)(unref(visitStatsData).pvGrowthRate)), 1)
                            ], 2)
                          ]),
                          _cache[31] || (_cache[31] = createBaseVNode("div", { class: "i-svg:browser w-8 h-8" }, null, -1))
                        ]),
                        createBaseVNode("div", _hoisted_36, [
                          _cache[32] || (_cache[32] = createBaseVNode("span", null, "总浏览量", -1)),
                          createBaseVNode("span", null, toDisplayString(Math.round(unref(transitionTotalPvCount))), 1)
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_row, {
          gutter: 10,
          class: "mt-5"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_col, {
              xs: 24,
              span: 16
            }, {
              default: withCtx(() => [
                createVNode(_component_el_card, null, {
                  header: withCtx(() => [
                    createBaseVNode("div", _hoisted_37, [
                      _cache[35] || (_cache[35] = createBaseVNode("span", null, "访问趋势", -1)),
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(visitTrendDateRange),
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(visitTrendDateRange) ? visitTrendDateRange.value = $event : null),
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_button, { value: 7 }, {
                            default: withCtx(() => [..._cache[33] || (_cache[33] = [
                              createTextVNode("近7天", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(_component_el_radio_button, { value: 30 }, {
                            default: withCtx(() => [..._cache[34] || (_cache[34] = [
                              createTextVNode("近30天", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_ECharts, {
                      options: unref(visitTrendChartOptions),
                      height: "400px"
                    }, null, 8, ["options"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_col, {
              xs: 24,
              span: 8
            }, {
              default: withCtx(() => [
                createVNode(_component_el_card, null, {
                  header: withCtx(() => [
                    createBaseVNode("div", _hoisted_38, [
                      _cache[37] || (_cache[37] = createBaseVNode("span", { class: "header-title" }, "最新动态", -1)),
                      createVNode(_component_el_link, {
                        type: "primary",
                        underline: "never",
                        href: "https://gitee.com/youlaiorg/vue3-element-admin/releases",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          _cache[36] || (_cache[36] = createTextVNode(" 完整记录 ", -1)),
                          createVNode(_component_el_icon, { class: "link-icon" }, {
                            default: withCtx(() => [
                              createVNode(_component_TopRight)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_scrollbar, { height: "400px" }, {
                      default: withCtx(() => [
                        createVNode(_component_el_timeline, { class: "p-3" }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(vesionList), (item, index) => {
                              return openBlock(), createBlock(_component_el_timeline_item, {
                                key: index,
                                timestamp: item.date,
                                placement: "top",
                                color: index === 0 ? "#67C23A" : "#909399",
                                hollow: index !== 0,
                                size: "large"
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", {
                                    class: normalizeClass(["version-item", { "latest-item": index === 0 }])
                                  }, [
                                    createBaseVNode("div", null, [
                                      createVNode(_component_el_text, { tag: "strong" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      item.tag ? (openBlock(), createBlock(_component_el_tag, {
                                        key: 0,
                                        type: index === 0 ? "success" : "info",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.tag), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["type"])) : createCommentVNode("", true)
                                    ]),
                                    createVNode(_component_el_text, { class: "version-content" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.content), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    item.link ? (openBlock(), createElementBlock("div", _hoisted_39, [
                                      createVNode(_component_el_link, {
                                        type: index === 0 ? "primary" : "info",
                                        href: item.link,
                                        target: "_blank",
                                        underline: "never"
                                      }, {
                                        default: withCtx(() => [
                                          _cache[38] || (_cache[38] = createTextVNode(" 详情 ", -1)),
                                          createVNode(_component_el_icon, { class: "link-icon" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_TopRight)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["type", "href"])
                                    ])) : createCommentVNode("", true)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["timestamp", "color", "hollow"]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd252548"]]);
export {
  test as default
};
