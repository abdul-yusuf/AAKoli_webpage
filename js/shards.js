!(function (t) {
  function e(a) {
    if (i[a]) return i[a].exports;
    var s = (i[a] = { i: a, l: !1, exports: {} });
    return t[a].call(s.exports, s, s.exports, e), (s.l = !0), s.exports;
  }
  var i = {};
  (e.m = t),
    (e.c = i),
    (e.d = function (t, i, a) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: a,
        });
    }),
    (e.n = function (t) {
      var i =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(i, "a", i), i;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 0));
})([
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = i(1);
    i.n(a), i(3);
  },
  function (t, e, i) {
    var a, s, n;
    !(function (r) {
      (s = [i(2)]),
        void 0 !== (n = "function" == typeof (a = r) ? a.apply(e, s) : a) &&
          (t.exports = n);
    })(function (t, e) {
      function i() {
        return new Date(Date.UTC.apply(Date, arguments));
      }
      function a() {
        var t = new Date();
        return i(t.getFullYear(), t.getMonth(), t.getDate());
      }
      function s(t, e) {
        return (
          t.getUTCFullYear() === e.getUTCFullYear() &&
          t.getUTCMonth() === e.getUTCMonth() &&
          t.getUTCDate() === e.getUTCDate()
        );
      }
      function n(i, a) {
        return function () {
          return (
            a !== e && t.fn.datepicker.deprecated(a),
            this[i].apply(this, arguments)
          );
        };
      }
      function r(t) {
        return t && !isNaN(t.getTime());
      }
      function o(e, i) {
        var a = t(e).data(),
          s = {},
          n = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var r in a)
          i.test(r) &&
            (s[
              r.replace(n, function (t, e) {
                return e.toLowerCase();
              })
            ] = a[r]);
        return s;
      }
      function l(e) {
        var i = {};
        if (m[e] || ((e = e.split("-")[0]), m[e])) {
          var a = m[e];
          return (
            t.each(g, function (t, e) {
              e in a && (i[e] = a[e]);
            }),
            i
          );
        }
      }
      var h = (function () {
          var e = {
            get: function (t) {
              return this.slice(t)[0];
            },
            contains: function (t) {
              for (var e = t && t.valueOf(), i = 0, a = this.length; i < a; i++)
                if (0 <= this[i].valueOf() - e && this[i].valueOf() - e < 864e5)
                  return i;
              return -1;
            },
            remove: function (t) {
              this.splice(t, 1);
            },
            replace: function (e) {
              e &&
                (t.isArray(e) || (e = [e]),
                this.clear(),
                this.push.apply(this, e));
            },
            clear: function () {
              this.length = 0;
            },
            copy: function () {
              var t = new h();
              return t.replace(this), t;
            },
          };
          return function () {
            var i = [];
            return i.push.apply(i, arguments), t.extend(i, e), i;
          };
        })(),
        u = function (e, i) {
          t.data(e, "datepicker", this),
            this._process_options(i),
            (this.dates = new h()),
            (this.viewDate = this.o.defaultViewDate),
            (this.focusDate = null),
            (this.element = t(e)),
            (this.isInput = this.element.is("input")),
            (this.inputField = this.isInput
              ? this.element
              : this.element.find("input")),
            (this.component =
              !!this.element.hasClass("date") &&
              this.element.find(".add-on, .input-group-addon, .btn")),
            this.component &&
              0 === this.component.length &&
              (this.component = !1),
            (this.isInline = !this.component && this.element.is("div")),
            (this.picker = t(v.template)),
            this._check_template(this.o.templates.leftArrow) &&
              this.picker.find(".prev").html(this.o.templates.leftArrow),
            this._check_template(this.o.templates.rightArrow) &&
              this.picker.find(".next").html(this.o.templates.rightArrow),
            this._buildEvents(),
            this._attachEvents(),
            this.isInline
              ? this.picker.addClass("datepicker-inline").appendTo(this.element)
              : this.picker.addClass("datepicker-dropdown dropdown-menu"),
            this.o.rtl && this.picker.addClass("datepicker-rtl"),
            this.o.calendarWeeks &&
              this.picker
                .find(
                  ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
                )
                .attr("colspan", function (t, e) {
                  return Number(e) + 1;
                }),
            this._process_options({
              startDate: this._o.startDate,
              endDate: this._o.endDate,
              daysOfWeekDisabled: this.o.daysOfWeekDisabled,
              daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
              datesDisabled: this.o.datesDisabled,
            }),
            (this._allow_update = !1),
            this.setViewMode(this.o.startView),
            (this._allow_update = !0),
            this.fillDow(),
            this.fillMonths(),
            this.update(),
            this.isInline && this.show();
        };
      u.prototype = {
        constructor: u,
        _resolveViewName: function (e) {
          return (
            t.each(v.viewModes, function (i, a) {
              if (e === i || -1 !== t.inArray(e, a.names)) return (e = i), !1;
            }),
            e
          );
        },
        _resolveDaysOfWeek: function (e) {
          return t.isArray(e) || (e = e.split(/[,\s]*/)), t.map(e, Number);
        },
        _check_template: function (i) {
          try {
            return (
              i !== e &&
              "" !== i &&
              ((i.match(/[<>]/g) || []).length <= 0 || t(i).length > 0)
            );
          } catch (t) {
            return !1;
          }
        },
        _process_options: function (e) {
          this._o = t.extend({}, this._o, e);
          var s = (this.o = t.extend({}, this._o)),
            n = s.language;
          m[n] || ((n = n.split("-")[0]), m[n] || (n = f.language)),
            (s.language = n),
            (s.startView = this._resolveViewName(s.startView)),
            (s.minViewMode = this._resolveViewName(s.minViewMode)),
            (s.maxViewMode = this._resolveViewName(s.maxViewMode)),
            (s.startView = Math.max(
              this.o.minViewMode,
              Math.min(this.o.maxViewMode, s.startView)
            )),
            !0 !== s.multidate &&
              ((s.multidate = Number(s.multidate) || !1),
              !1 !== s.multidate && (s.multidate = Math.max(0, s.multidate))),
            (s.multidateSeparator = String(s.multidateSeparator)),
            (s.weekStart %= 7),
            (s.weekEnd = (s.weekStart + 6) % 7);
          var r = v.parseFormat(s.format);
          s.startDate !== -1 / 0 &&
            (s.startDate
              ? s.startDate instanceof Date
                ? (s.startDate = this._local_to_utc(
                    this._zero_time(s.startDate)
                  ))
                : (s.startDate = v.parseDate(
                    s.startDate,
                    r,
                    s.language,
                    s.assumeNearbyYear
                  ))
              : (s.startDate = -1 / 0)),
            s.endDate !== 1 / 0 &&
              (s.endDate
                ? s.endDate instanceof Date
                  ? (s.endDate = this._local_to_utc(this._zero_time(s.endDate)))
                  : (s.endDate = v.parseDate(
                      s.endDate,
                      r,
                      s.language,
                      s.assumeNearbyYear
                    ))
                : (s.endDate = 1 / 0)),
            (s.daysOfWeekDisabled = this._resolveDaysOfWeek(
              s.daysOfWeekDisabled || []
            )),
            (s.daysOfWeekHighlighted = this._resolveDaysOfWeek(
              s.daysOfWeekHighlighted || []
            )),
            (s.datesDisabled = s.datesDisabled || []),
            t.isArray(s.datesDisabled) ||
              (s.datesDisabled = s.datesDisabled.split(",")),
            (s.datesDisabled = t.map(s.datesDisabled, function (t) {
              return v.parseDate(t, r, s.language, s.assumeNearbyYear);
            }));
          var o = String(s.orientation).toLowerCase().split(/\s+/g),
            l = s.orientation.toLowerCase();
          if (
            ((o = t.grep(o, function (t) {
              return /^auto|left|right|top|bottom$/.test(t);
            })),
            (s.orientation = { x: "auto", y: "auto" }),
            l && "auto" !== l)
          )
            if (1 === o.length)
              switch (o[0]) {
                case "top":
                case "bottom":
                  s.orientation.y = o[0];
                  break;
                case "left":
                case "right":
                  s.orientation.x = o[0];
              }
            else
              (l = t.grep(o, function (t) {
                return /^left|right$/.test(t);
              })),
                (s.orientation.x = l[0] || "auto"),
                (l = t.grep(o, function (t) {
                  return /^top|bottom$/.test(t);
                })),
                (s.orientation.y = l[0] || "auto");
          else;
          if (
            s.defaultViewDate instanceof Date ||
            "string" == typeof s.defaultViewDate
          )
            s.defaultViewDate = v.parseDate(
              s.defaultViewDate,
              r,
              s.language,
              s.assumeNearbyYear
            );
          else if (s.defaultViewDate) {
            var h = s.defaultViewDate.year || new Date().getFullYear(),
              u = s.defaultViewDate.month || 0,
              c = s.defaultViewDate.day || 1;
            s.defaultViewDate = i(h, u, c);
          } else s.defaultViewDate = a();
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function (t) {
          for (var i, a, s, n = 0; n < t.length; n++)
            (i = t[n][0]),
              2 === t[n].length
                ? ((a = e), (s = t[n][1]))
                : 3 === t[n].length && ((a = t[n][1]), (s = t[n][2])),
              i.on(s, a);
        },
        _unapplyEvents: function (t) {
          for (var i, a, s, n = 0; n < t.length; n++)
            (i = t[n][0]),
              2 === t[n].length
                ? ((s = e), (a = t[n][1]))
                : 3 === t[n].length && ((s = t[n][1]), (a = t[n][2])),
              i.off(a, s);
        },
        _buildEvents: function () {
          var e = {
            keyup: t.proxy(function (e) {
              -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
                this.update();
            }, this),
            keydown: t.proxy(this.keydown, this),
            paste: t.proxy(this.paste, this),
          };
          !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)),
            this.isInput
              ? (this._events = [[this.element, e]])
              : this.component && this.inputField.length
              ? (this._events = [
                  [this.inputField, e],
                  [this.component, { click: t.proxy(this.show, this) }],
                ])
              : (this._events = [
                  [
                    this.element,
                    {
                      click: t.proxy(this.show, this),
                      keydown: t.proxy(this.keydown, this),
                    },
                  ],
                ]),
            this._events.push(
              [
                this.element,
                "*",
                {
                  blur: t.proxy(function (t) {
                    this._focused_from = t.target;
                  }, this),
                },
              ],
              [
                this.element,
                {
                  blur: t.proxy(function (t) {
                    this._focused_from = t.target;
                  }, this),
                },
              ]
            ),
            this.o.immediateUpdates &&
              this._events.push([
                this.element,
                {
                  "changeYear changeMonth": t.proxy(function (t) {
                    this.update(t.date);
                  }, this),
                },
              ]),
            (this._secondaryEvents = [
              [this.picker, { click: t.proxy(this.click, this) }],
              [
                this.picker,
                ".prev, .next",
                { click: t.proxy(this.navArrowsClick, this) },
              ],
              [
                this.picker,
                ".day:not(.disabled)",
                { click: t.proxy(this.dayCellClick, this) },
              ],
              [t(window), { resize: t.proxy(this.place, this) }],
              [
                t(document),
                {
                  "mousedown touchstart": t.proxy(function (t) {
                    this.element.is(t.target) ||
                      this.element.find(t.target).length ||
                      this.picker.is(t.target) ||
                      this.picker.find(t.target).length ||
                      this.isInline ||
                      this.hide();
                  }, this),
                },
              ],
            ]);
        },
        _attachEvents: function () {
          this._detachEvents(), this._applyEvents(this._events);
        },
        _detachEvents: function () {
          this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function () {
          this._detachSecondaryEvents(),
            this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function () {
          this._unapplyEvents(this._secondaryEvents);
        },
        _trigger: function (e, i) {
          var a = i || this.dates.get(-1),
            s = this._utc_to_local(a);
          this.element.trigger({
            type: e,
            date: s,
            viewMode: this.viewMode,
            dates: t.map(this.dates, this._utc_to_local),
            format: t.proxy(function (t, e) {
              0 === arguments.length
                ? ((t = this.dates.length - 1), (e = this.o.format))
                : "string" == typeof t &&
                  ((e = t), (t = this.dates.length - 1)),
                (e = e || this.o.format);
              var i = this.dates.get(t);
              return v.formatDate(i, e, this.o.language);
            }, this),
          });
        },
        show: function () {
          if (
            !(
              this.inputField.prop("disabled") ||
              (this.inputField.prop("readonly") &&
                !1 === this.o.enableOnReadonly)
            )
          )
            return (
              this.isInline || this.picker.appendTo(this.o.container),
              this.place(),
              this.picker.show(),
              this._attachSecondaryEvents(),
              this._trigger("show"),
              (window.navigator.msMaxTouchPoints ||
                "ontouchstart" in document) &&
                this.o.disableTouchKeyboard &&
                t(this.element).blur(),
              this
            );
        },
        hide: function () {
          return this.isInline || !this.picker.is(":visible")
            ? this
            : ((this.focusDate = null),
              this.picker.hide().detach(),
              this._detachSecondaryEvents(),
              this.setViewMode(this.o.startView),
              this.o.forceParse && this.inputField.val() && this.setValue(),
              this._trigger("hide"),
              this);
        },
        destroy: function () {
          return (
            this.hide(),
            this._detachEvents(),
            this._detachSecondaryEvents(),
            this.picker.remove(),
            delete this.element.data().datepicker,
            this.isInput || delete this.element.data().date,
            this
          );
        },
        paste: function (e) {
          var i;
          if (
            e.originalEvent.clipboardData &&
            e.originalEvent.clipboardData.types &&
            -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)
          )
            i = e.originalEvent.clipboardData.getData("text/plain");
          else {
            if (!window.clipboardData) return;
            i = window.clipboardData.getData("Text");
          }
          this.setDate(i), this.update(), e.preventDefault();
        },
        _utc_to_local: function (t) {
          if (!t) return t;
          var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
          return (
            e.getTimezoneOffset() !== t.getTimezoneOffset() &&
              (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())),
            e
          );
        },
        _local_to_utc: function (t) {
          return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset());
        },
        _zero_time: function (t) {
          return t && new Date(t.getFullYear(), t.getMonth(), t.getDate());
        },
        _zero_utc_time: function (t) {
          return t && i(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
        },
        getDates: function () {
          return t.map(this.dates, this._utc_to_local);
        },
        getUTCDates: function () {
          return t.map(this.dates, function (t) {
            return new Date(t);
          });
        },
        getDate: function () {
          return this._utc_to_local(this.getUTCDate());
        },
        getUTCDate: function () {
          var t = this.dates.get(-1);
          return t !== e ? new Date(t) : null;
        },
        clearDates: function () {
          this.inputField.val(""),
            this.update(),
            this._trigger("changeDate"),
            this.o.autoclose && this.hide();
        },
        setDates: function () {
          var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
          return (
            this.update.apply(this, e),
            this._trigger("changeDate"),
            this.setValue(),
            this
          );
        },
        setUTCDates: function () {
          var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
          return this.setDates.apply(this, t.map(e, this._utc_to_local)), this;
        },
        setDate: n("setDates"),
        setUTCDate: n("setUTCDates"),
        remove: n(
          "destroy",
          "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
        ),
        setValue: function () {
          var t = this.getFormattedDate();
          return this.inputField.val(t), this;
        },
        getFormattedDate: function (i) {
          i === e && (i = this.o.format);
          var a = this.o.language;
          return t
            .map(this.dates, function (t) {
              return v.formatDate(t, i, a);
            })
            .join(this.o.multidateSeparator);
        },
        getStartDate: function () {
          return this.o.startDate;
        },
        setStartDate: function (t) {
          return (
            this._process_options({ startDate: t }),
            this.update(),
            this.updateNavArrows(),
            this
          );
        },
        getEndDate: function () {
          return this.o.endDate;
        },
        setEndDate: function (t) {
          return (
            this._process_options({ endDate: t }),
            this.update(),
            this.updateNavArrows(),
            this
          );
        },
        setDaysOfWeekDisabled: function (t) {
          return (
            this._process_options({ daysOfWeekDisabled: t }),
            this.update(),
            this
          );
        },
        setDaysOfWeekHighlighted: function (t) {
          return (
            this._process_options({ daysOfWeekHighlighted: t }),
            this.update(),
            this
          );
        },
        setDatesDisabled: function (t) {
          return (
            this._process_options({ datesDisabled: t }), this.update(), this
          );
        },
        place: function () {
          if (this.isInline) return this;
          var e = this.picker.outerWidth(),
            i = this.picker.outerHeight(),
            a = t(this.o.container),
            s = a.width(),
            n =
              "body" === this.o.container
                ? t(document).scrollTop()
                : a.scrollTop(),
            r = a.offset(),
            o = [0];
          this.element.parents().each(function () {
            var e = t(this).css("z-index");
            "auto" !== e && 0 !== Number(e) && o.push(Number(e));
          });
          var l = Math.max.apply(Math, o) + this.o.zIndexOffset,
            h = this.component
              ? this.component.parent().offset()
              : this.element.offset(),
            u = this.component
              ? this.component.outerHeight(!0)
              : this.element.outerHeight(!1),
            c = this.component
              ? this.component.outerWidth(!0)
              : this.element.outerWidth(!1),
            d = h.left - r.left,
            p = h.top - r.top;
          "body" !== this.o.container && (p += n),
            this.picker.removeClass(
              "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
            ),
            "auto" !== this.o.orientation.x
              ? (this.picker.addClass(
                  "datepicker-orient-" + this.o.orientation.x
                ),
                "right" === this.o.orientation.x && (d -= e - c))
              : h.left < 0
              ? (this.picker.addClass("datepicker-orient-left"),
                (d -= h.left - 10))
              : d + e > s
              ? (this.picker.addClass("datepicker-orient-right"), (d += c - e))
              : this.o.rtl
              ? this.picker.addClass("datepicker-orient-right")
              : this.picker.addClass("datepicker-orient-left");
          var f = this.o.orientation.y;
          if (
            ("auto" === f && (f = -n + p - i < 0 ? "bottom" : "top"),
            this.picker.addClass("datepicker-orient-" + f),
            "top" === f
              ? (p -= i + parseInt(this.picker.css("padding-top")))
              : (p += u),
            this.o.rtl)
          ) {
            var g = s - (d + c);
            this.picker.css({ top: p, right: g, zIndex: l });
          } else this.picker.css({ top: p, left: d, zIndex: l });
          return this;
        },
        _allow_update: !0,
        update: function () {
          if (!this._allow_update) return this;
          var e = this.dates.copy(),
            i = [],
            a = !1;
          return (
            arguments.length
              ? (t.each(
                  arguments,
                  t.proxy(function (t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)), i.push(e);
                  }, this)
                ),
                (a = !0))
              : ((i = this.isInput
                  ? this.element.val()
                  : this.element.data("date") || this.inputField.val()),
                (i =
                  i && this.o.multidate
                    ? i.split(this.o.multidateSeparator)
                    : [i]),
                delete this.element.data().date),
            (i = t.map(
              i,
              t.proxy(function (t) {
                return v.parseDate(
                  t,
                  this.o.format,
                  this.o.language,
                  this.o.assumeNearbyYear
                );
              }, this)
            )),
            (i = t.grep(
              i,
              t.proxy(function (t) {
                return !this.dateWithinRange(t) || !t;
              }, this),
              !0
            )),
            this.dates.replace(i),
            this.o.updateViewDate &&
              (this.dates.length
                ? (this.viewDate = new Date(this.dates.get(-1)))
                : this.viewDate < this.o.startDate
                ? (this.viewDate = new Date(this.o.startDate))
                : this.viewDate > this.o.endDate
                ? (this.viewDate = new Date(this.o.endDate))
                : (this.viewDate = this.o.defaultViewDate)),
            a
              ? (this.setValue(), this.element.change())
              : this.dates.length &&
                String(e) !== String(this.dates) &&
                a &&
                (this._trigger("changeDate"), this.element.change()),
            !this.dates.length &&
              e.length &&
              (this._trigger("clearDate"), this.element.change()),
            this.fill(),
            this
          );
        },
        fillDow: function () {
          if (this.o.showWeekDays) {
            var e = this.o.weekStart,
              i = "<tr>";
            for (
              this.o.calendarWeeks && (i += '<th class="cw">&#160;</th>');
              e < this.o.weekStart + 7;

            )
              (i += '<th class="dow'),
                -1 !== t.inArray(e, this.o.daysOfWeekDisabled) &&
                  (i += " disabled"),
                (i += '">' + m[this.o.language].daysMin[e++ % 7] + "</th>");
            (i += "</tr>"),
              this.picker.find(".datepicker-days thead").append(i);
          }
        },
        fillMonths: function () {
          for (
            var t = this._utc_to_local(this.viewDate), e = "", i = 0;
            i < 12;
            i++
          )
            e +=
              '<span class="month' +
              (t && t.getMonth() === i ? " focused" : "") +
              '">' +
              m[this.o.language].monthsShort[i] +
              "</span>";
          this.picker.find(".datepicker-months td").html(e);
        },
        setRange: function (e) {
          e && e.length
            ? (this.range = t.map(e, function (t) {
                return t.valueOf();
              }))
            : delete this.range,
            this.fill();
        },
        getClassNames: function (e) {
          var i = [],
            n = this.viewDate.getUTCFullYear(),
            r = this.viewDate.getUTCMonth(),
            o = a();
          return (
            e.getUTCFullYear() < n ||
            (e.getUTCFullYear() === n && e.getUTCMonth() < r)
              ? i.push("old")
              : (e.getUTCFullYear() > n ||
                  (e.getUTCFullYear() === n && e.getUTCMonth() > r)) &&
                i.push("new"),
            this.focusDate &&
              e.valueOf() === this.focusDate.valueOf() &&
              i.push("focused"),
            this.o.todayHighlight && s(e, o) && i.push("today"),
            -1 !== this.dates.contains(e) && i.push("active"),
            this.dateWithinRange(e) || i.push("disabled"),
            this.dateIsDisabled(e) && i.push("disabled", "disabled-date"),
            -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) &&
              i.push("highlighted"),
            this.range &&
              (e > this.range[0] &&
                e < this.range[this.range.length - 1] &&
                i.push("range"),
              -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected"),
              e.valueOf() === this.range[0] && i.push("range-start"),
              e.valueOf() === this.range[this.range.length - 1] &&
                i.push("range-end")),
            i
          );
        },
        _fill_yearsView: function (i, a, s, n, r, o, l) {
          for (
            var h,
              u,
              c,
              d = "",
              p = s / 10,
              f = this.picker.find(i),
              g = Math.floor(n / s) * s,
              m = g + 9 * p,
              v = Math.floor(this.viewDate.getFullYear() / p) * p,
              y = t.map(this.dates, function (t) {
                return Math.floor(t.getUTCFullYear() / p) * p;
              }),
              w = g - p;
            w <= m + p;
            w += p
          )
            (h = [a]),
              (u = null),
              w === g - p ? h.push("old") : w === m + p && h.push("new"),
              -1 !== t.inArray(w, y) && h.push("active"),
              (w < r || w > o) && h.push("disabled"),
              w === v && h.push("focused"),
              l !== t.noop &&
                ((c = l(new Date(w, 0, 1))) === e
                  ? (c = {})
                  : "boolean" == typeof c
                  ? (c = { enabled: c })
                  : "string" == typeof c && (c = { classes: c }),
                !1 === c.enabled && h.push("disabled"),
                c.classes && (h = h.concat(c.classes.split(/\s+/))),
                c.tooltip && (u = c.tooltip)),
              (d +=
                '<span class="' +
                h.join(" ") +
                '"' +
                (u ? ' title="' + u + '"' : "") +
                ">" +
                w +
                "</span>");
          f.find(".datepicker-switch").text(g + "-" + m), f.find("td").html(d);
        },
        fill: function () {
          var a,
            s,
            n = new Date(this.viewDate),
            r = n.getUTCFullYear(),
            o = n.getUTCMonth(),
            l =
              this.o.startDate !== -1 / 0
                ? this.o.startDate.getUTCFullYear()
                : -1 / 0,
            h =
              this.o.startDate !== -1 / 0
                ? this.o.startDate.getUTCMonth()
                : -1 / 0,
            u =
              this.o.endDate !== 1 / 0
                ? this.o.endDate.getUTCFullYear()
                : 1 / 0,
            c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            d = m[this.o.language].today || m.en.today || "",
            p = m[this.o.language].clear || m.en.clear || "",
            f = m[this.o.language].titleFormat || m.en.titleFormat;
          if (!isNaN(r) && !isNaN(o)) {
            this.picker
              .find(".datepicker-days .datepicker-switch")
              .text(v.formatDate(n, f, this.o.language)),
              this.picker
                .find("tfoot .today")
                .text(d)
                .css(
                  "display",
                  !0 === this.o.todayBtn || "linked" === this.o.todayBtn
                    ? "table-cell"
                    : "none"
                ),
              this.picker
                .find("tfoot .clear")
                .text(p)
                .css("display", !0 === this.o.clearBtn ? "table-cell" : "none"),
              this.picker
                .find("thead .datepicker-title")
                .text(this.o.title)
                .css(
                  "display",
                  "string" == typeof this.o.title && "" !== this.o.title
                    ? "table-cell"
                    : "none"
                ),
              this.updateNavArrows(),
              this.fillMonths();
            var g = i(r, o, 0),
              y = g.getUTCDate();
            g.setUTCDate(y - ((g.getUTCDay() - this.o.weekStart + 7) % 7));
            var w = new Date(g);
            g.getUTCFullYear() < 100 && w.setUTCFullYear(g.getUTCFullYear()),
              w.setUTCDate(w.getUTCDate() + 42),
              (w = w.valueOf());
            for (var D, b, k = []; g.valueOf() < w; ) {
              if (
                (D = g.getUTCDay()) === this.o.weekStart &&
                (k.push("<tr>"), this.o.calendarWeeks)
              ) {
                var C = new Date(+g + ((this.o.weekStart - D - 7) % 7) * 864e5),
                  x = new Date(Number(C) + ((11 - C.getUTCDay()) % 7) * 864e5),
                  S = new Date(
                    Number((S = i(x.getUTCFullYear(), 0, 1))) +
                      ((11 - S.getUTCDay()) % 7) * 864e5
                  ),
                  _ = (x - S) / 864e5 / 7 + 1;
                k.push('<td class="cw">' + _ + "</td>");
              }
              (b = this.getClassNames(g)).push("day");
              var M = g.getUTCDate();
              this.o.beforeShowDay !== t.noop &&
                ((s = this.o.beforeShowDay(this._utc_to_local(g))) === e
                  ? (s = {})
                  : "boolean" == typeof s
                  ? (s = { enabled: s })
                  : "string" == typeof s && (s = { classes: s }),
                !1 === s.enabled && b.push("disabled"),
                s.classes && (b = b.concat(s.classes.split(/\s+/))),
                s.tooltip && (a = s.tooltip),
                s.content && (M = s.content)),
                (b = t.isFunction(t.uniqueSort)
                  ? t.uniqueSort(b)
                  : t.unique(b)),
                k.push(
                  '<td class="' +
                    b.join(" ") +
                    '"' +
                    (a ? ' title="' + a + '"' : "") +
                    ' data-date="' +
                    g.getTime().toString() +
                    '">' +
                    M +
                    "</td>"
                ),
                (a = null),
                D === this.o.weekEnd && k.push("</tr>"),
                g.setUTCDate(g.getUTCDate() + 1);
            }
            this.picker.find(".datepicker-days tbody").html(k.join(""));
            var T =
                m[this.o.language].monthsTitle || m.en.monthsTitle || "Months",
              U = this.picker
                .find(".datepicker-months")
                .find(".datepicker-switch")
                .text(this.o.maxViewMode < 2 ? T : r)
                .end()
                .find("tbody span")
                .removeClass("active");
            if (
              (t.each(this.dates, function (t, e) {
                e.getUTCFullYear() === r &&
                  U.eq(e.getUTCMonth()).addClass("active");
              }),
              (r < l || r > u) && U.addClass("disabled"),
              r === l && U.slice(0, h).addClass("disabled"),
              r === u && U.slice(c + 1).addClass("disabled"),
              this.o.beforeShowMonth !== t.noop)
            ) {
              var E = this;
              t.each(U, function (i, a) {
                var s = new Date(r, i, 1),
                  n = E.o.beforeShowMonth(s);
                n === e
                  ? (n = {})
                  : "boolean" == typeof n
                  ? (n = { enabled: n })
                  : "string" == typeof n && (n = { classes: n }),
                  !1 !== n.enabled ||
                    t(a).hasClass("disabled") ||
                    t(a).addClass("disabled"),
                  n.classes && t(a).addClass(n.classes),
                  n.tooltip && t(a).prop("title", n.tooltip);
              });
            }
            this._fill_yearsView(
              ".datepicker-years",
              "year",
              10,
              r,
              l,
              u,
              this.o.beforeShowYear
            ),
              this._fill_yearsView(
                ".datepicker-decades",
                "decade",
                100,
                r,
                l,
                u,
                this.o.beforeShowDecade
              ),
              this._fill_yearsView(
                ".datepicker-centuries",
                "century",
                1e3,
                r,
                l,
                u,
                this.o.beforeShowCentury
              );
          }
        },
        updateNavArrows: function () {
          if (this._allow_update) {
            var t,
              e,
              i = new Date(this.viewDate),
              a = i.getUTCFullYear(),
              s = i.getUTCMonth(),
              n =
                this.o.startDate !== -1 / 0
                  ? this.o.startDate.getUTCFullYear()
                  : -1 / 0,
              r =
                this.o.startDate !== -1 / 0
                  ? this.o.startDate.getUTCMonth()
                  : -1 / 0,
              o =
                this.o.endDate !== 1 / 0
                  ? this.o.endDate.getUTCFullYear()
                  : 1 / 0,
              l =
                this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
              h = 1;
            switch (this.viewMode) {
              case 0:
                (t = a <= n && s <= r), (e = a >= o && s >= l);
                break;
              case 4:
                h *= 10;
              case 3:
                h *= 10;
              case 2:
                h *= 10;
              case 1:
                (t = Math.floor(a / h) * h <= n),
                  (e = Math.floor(a / h) * h + h >= o);
            }
            this.picker.find(".prev").toggleClass("disabled", t),
              this.picker.find(".next").toggleClass("disabled", e);
          }
        },
        click: function (e) {
          e.preventDefault(), e.stopPropagation();
          var s, n, r, o;
          (s = t(e.target)).hasClass("datepicker-switch") &&
            this.viewMode !== this.o.maxViewMode &&
            this.setViewMode(this.viewMode + 1),
            s.hasClass("today") &&
              !s.hasClass("day") &&
              (this.setViewMode(0),
              this._setDate(a(), "linked" === this.o.todayBtn ? null : "view")),
            s.hasClass("clear") && this.clearDates(),
            s.hasClass("disabled") ||
              ((s.hasClass("month") ||
                s.hasClass("year") ||
                s.hasClass("decade") ||
                s.hasClass("century")) &&
                (this.viewDate.setUTCDate(1),
                (n = 1),
                1 === this.viewMode
                  ? ((o = s.parent().find("span").index(s)),
                    (r = this.viewDate.getUTCFullYear()),
                    this.viewDate.setUTCMonth(o))
                  : ((o = 0),
                    (r = Number(s.text())),
                    this.viewDate.setUTCFullYear(r)),
                this._trigger(v.viewModes[this.viewMode - 1].e, this.viewDate),
                this.viewMode === this.o.minViewMode
                  ? this._setDate(i(r, o, n))
                  : (this.setViewMode(this.viewMode - 1), this.fill()))),
            this.picker.is(":visible") &&
              this._focused_from &&
              this._focused_from.focus(),
            delete this._focused_from;
        },
        dayCellClick: function (e) {
          var i = t(e.currentTarget).data("date"),
            a = new Date(i);
          this.o.updateViewDate &&
            (a.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
              this._trigger("changeYear", this.viewDate),
            a.getUTCMonth() !== this.viewDate.getUTCMonth() &&
              this._trigger("changeMonth", this.viewDate)),
            this._setDate(a);
        },
        navArrowsClick: function (e) {
          var i = t(e.currentTarget).hasClass("prev") ? -1 : 1;
          0 !== this.viewMode && (i *= 12 * v.viewModes[this.viewMode].navStep),
            (this.viewDate = this.moveMonth(this.viewDate, i)),
            this._trigger(v.viewModes[this.viewMode].e, this.viewDate),
            this.fill();
        },
        _toggle_multidate: function (t) {
          var e = this.dates.contains(t);
          if (
            (t || this.dates.clear(),
            -1 !== e
              ? (!0 === this.o.multidate ||
                  this.o.multidate > 1 ||
                  this.o.toggleActive) &&
                this.dates.remove(e)
              : !1 === this.o.multidate
              ? (this.dates.clear(), this.dates.push(t))
              : this.dates.push(t),
            "number" == typeof this.o.multidate)
          )
            for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
        },
        _setDate: function (t, e) {
          (e && "date" !== e) || this._toggle_multidate(t && new Date(t)),
            ((!e && this.o.updateViewDate) || "view" === e) &&
              (this.viewDate = t && new Date(t)),
            this.fill(),
            this.setValue(),
            (e && "view" === e) || this._trigger("changeDate"),
            this.inputField.trigger("change"),
            !this.o.autoclose || (e && "date" !== e) || this.hide();
        },
        moveDay: function (t, e) {
          var i = new Date(t);
          return i.setUTCDate(t.getUTCDate() + e), i;
        },
        moveWeek: function (t, e) {
          return this.moveDay(t, 7 * e);
        },
        moveMonth: function (t, e) {
          if (!r(t)) return this.o.defaultViewDate;
          if (!e) return t;
          var i,
            a,
            s = new Date(t.valueOf()),
            n = s.getUTCDate(),
            o = s.getUTCMonth(),
            l = Math.abs(e);
          if (((e = e > 0 ? 1 : -1), 1 === l))
            (a =
              -1 === e
                ? function () {
                    return s.getUTCMonth() === o;
                  }
                : function () {
                    return s.getUTCMonth() !== i;
                  }),
              (i = o + e),
              s.setUTCMonth(i),
              (i = (i + 12) % 12);
          else {
            for (var h = 0; h < l; h++) s = this.moveMonth(s, e);
            (i = s.getUTCMonth()),
              s.setUTCDate(n),
              (a = function () {
                return i !== s.getUTCMonth();
              });
          }
          for (; a(); ) s.setUTCDate(--n), s.setUTCMonth(i);
          return s;
        },
        moveYear: function (t, e) {
          return this.moveMonth(t, 12 * e);
        },
        moveAvailableDate: function (t, e, i) {
          do {
            if (((t = this[i](t, e)), !this.dateWithinRange(t))) return !1;
            i = "moveDay";
          } while (this.dateIsDisabled(t));
          return t;
        },
        weekOfDateIsDisabled: function (e) {
          return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled);
        },
        dateIsDisabled: function (e) {
          return (
            this.weekOfDateIsDisabled(e) ||
            t.grep(this.o.datesDisabled, function (t) {
              return s(e, t);
            }).length > 0
          );
        },
        dateWithinRange: function (t) {
          return t >= this.o.startDate && t <= this.o.endDate;
        },
        keydown: function (t) {
          if (this.picker.is(":visible")) {
            var e,
              i,
              a = !1,
              s = this.focusDate || this.viewDate;
            switch (t.keyCode) {
              case 27:
                this.focusDate
                  ? ((this.focusDate = null),
                    (this.viewDate = this.dates.get(-1) || this.viewDate),
                    this.fill())
                  : this.hide(),
                  t.preventDefault(),
                  t.stopPropagation();
                break;
              case 37:
              case 38:
              case 39:
              case 40:
                if (
                  !this.o.keyboardNavigation ||
                  7 === this.o.daysOfWeekDisabled.length
                )
                  break;
                (e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1),
                  0 === this.viewMode
                    ? t.ctrlKey
                      ? (i = this.moveAvailableDate(s, e, "moveYear")) &&
                        this._trigger("changeYear", this.viewDate)
                      : t.shiftKey
                      ? (i = this.moveAvailableDate(s, e, "moveMonth")) &&
                        this._trigger("changeMonth", this.viewDate)
                      : 37 === t.keyCode || 39 === t.keyCode
                      ? (i = this.moveAvailableDate(s, e, "moveDay"))
                      : this.weekOfDateIsDisabled(s) ||
                        (i = this.moveAvailableDate(s, e, "moveWeek"))
                    : 1 === this.viewMode
                    ? ((38 !== t.keyCode && 40 !== t.keyCode) || (e *= 4),
                      (i = this.moveAvailableDate(s, e, "moveMonth")))
                    : 2 === this.viewMode &&
                      ((38 !== t.keyCode && 40 !== t.keyCode) || (e *= 4),
                      (i = this.moveAvailableDate(s, e, "moveYear"))),
                  i &&
                    ((this.focusDate = this.viewDate = i),
                    this.setValue(),
                    this.fill(),
                    t.preventDefault());
                break;
              case 13:
                if (!this.o.forceParse) break;
                (s = this.focusDate || this.dates.get(-1) || this.viewDate),
                  this.o.keyboardNavigation &&
                    (this._toggle_multidate(s), (a = !0)),
                  (this.focusDate = null),
                  (this.viewDate = this.dates.get(-1) || this.viewDate),
                  this.setValue(),
                  this.fill(),
                  this.picker.is(":visible") &&
                    (t.preventDefault(),
                    t.stopPropagation(),
                    this.o.autoclose && this.hide());
                break;
              case 9:
                (this.focusDate = null),
                  (this.viewDate = this.dates.get(-1) || this.viewDate),
                  this.fill(),
                  this.hide();
            }
            a &&
              (this.dates.length
                ? this._trigger("changeDate")
                : this._trigger("clearDate"),
              this.inputField.trigger("change"));
          } else
            (40 !== t.keyCode && 27 !== t.keyCode) ||
              (this.show(), t.stopPropagation());
        },
        setViewMode: function (t) {
          (this.viewMode = t),
            this.picker
              .children("div")
              .hide()
              .filter(".datepicker-" + v.viewModes[this.viewMode].clsName)
              .show(),
            this.updateNavArrows(),
            this._trigger("changeViewMode", new Date(this.viewDate));
        },
      };
      var c = function (e, i) {
        t.data(e, "datepicker", this),
          (this.element = t(e)),
          (this.inputs = t.map(i.inputs, function (t) {
            return t.jquery ? t[0] : t;
          })),
          delete i.inputs,
          (this.keepEmptyValues = i.keepEmptyValues),
          delete i.keepEmptyValues,
          p
            .call(t(this.inputs), i)
            .on("changeDate", t.proxy(this.dateUpdated, this)),
          (this.pickers = t.map(this.inputs, function (e) {
            return t.data(e, "datepicker");
          })),
          this.updateDates();
      };
      c.prototype = {
        updateDates: function () {
          (this.dates = t.map(this.pickers, function (t) {
            return t.getUTCDate();
          })),
            this.updateRanges();
        },
        updateRanges: function () {
          var e = t.map(this.dates, function (t) {
            return t.valueOf();
          });
          t.each(this.pickers, function (t, i) {
            i.setRange(e);
          });
        },
        dateUpdated: function (i) {
          if (!this.updating) {
            this.updating = !0;
            var a = t.data(i.target, "datepicker");
            if (a !== e) {
              var s = a.getUTCDate(),
                n = this.keepEmptyValues,
                r = t.inArray(i.target, this.inputs),
                o = r - 1,
                l = r + 1,
                h = this.inputs.length;
              if (-1 !== r) {
                if (
                  (t.each(this.pickers, function (t, e) {
                    e.getUTCDate() || (e !== a && n) || e.setUTCDate(s);
                  }),
                  s < this.dates[o])
                )
                  for (; o >= 0 && s < this.dates[o]; )
                    this.pickers[o--].setUTCDate(s);
                else if (s > this.dates[l])
                  for (; l < h && s > this.dates[l]; )
                    this.pickers[l++].setUTCDate(s);
                this.updateDates(), delete this.updating;
              }
            }
          }
        },
        destroy: function () {
          t.map(this.pickers, function (t) {
            t.destroy();
          }),
            t(this.inputs).off("changeDate", this.dateUpdated),
            delete this.element.data().datepicker;
        },
        remove: n(
          "destroy",
          "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
        ),
      };
      var d = t.fn.datepicker,
        p = function (i) {
          var a = Array.apply(null, arguments);
          a.shift();
          var s;
          if (
            (this.each(function () {
              var e = t(this),
                n = e.data("datepicker"),
                r = "object" == typeof i && i;
              if (!n) {
                var h = o(this, "date"),
                  d = l(t.extend({}, f, h, r).language),
                  p = t.extend({}, f, d, h, r);
                e.hasClass("input-daterange") || p.inputs
                  ? (t.extend(p, {
                      inputs: p.inputs || e.find("input").toArray(),
                    }),
                    (n = new c(this, p)))
                  : (n = new u(this, p)),
                  e.data("datepicker", n);
              }
              "string" == typeof i &&
                "function" == typeof n[i] &&
                (s = n[i].apply(n, a));
            }),
            s === e || s instanceof u || s instanceof c)
          )
            return this;
          if (this.length > 1)
            throw new Error(
              "Using only allowed for the collection of a single element (" +
                i +
                " function)"
            );
          return s;
        };
      t.fn.datepicker = p;
      var f = (t.fn.datepicker.defaults = {
          assumeNearbyYear: !1,
          autoclose: !1,
          beforeShowDay: t.noop,
          beforeShowMonth: t.noop,
          beforeShowYear: t.noop,
          beforeShowDecade: t.noop,
          beforeShowCentury: t.noop,
          calendarWeeks: !1,
          clearBtn: !1,
          toggleActive: !1,
          daysOfWeekDisabled: [],
          daysOfWeekHighlighted: [],
          datesDisabled: [],
          endDate: 1 / 0,
          forceParse: !0,
          format: "mm/dd/yyyy",
          keepEmptyValues: !1,
          keyboardNavigation: !0,
          language: "en",
          minViewMode: 0,
          maxViewMode: 4,
          multidate: !1,
          multidateSeparator: ",",
          orientation: "auto",
          rtl: !1,
          startDate: -1 / 0,
          startView: 0,
          todayBtn: !1,
          todayHighlight: !1,
          updateViewDate: !0,
          weekStart: 0,
          disableTouchKeyboard: !1,
          enableOnReadonly: !0,
          showOnFocus: !0,
          zIndexOffset: 10,
          container: "body",
          immediateUpdates: !1,
          title: "",
          templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
          showWeekDays: !0,
        }),
        g = (t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]);
      t.fn.datepicker.Constructor = u;
      var m = (t.fn.datepicker.dates = {
          en: {
            days: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            monthsShort: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy",
          },
        }),
        v = {
          viewModes: [
            { names: ["days", "month"], clsName: "days", e: "changeMonth" },
            {
              names: ["months", "year"],
              clsName: "months",
              e: "changeYear",
              navStep: 1,
            },
            {
              names: ["years", "decade"],
              clsName: "years",
              e: "changeDecade",
              navStep: 10,
            },
            {
              names: ["decades", "century"],
              clsName: "decades",
              e: "changeCentury",
              navStep: 100,
            },
            {
              names: ["centuries", "millennium"],
              clsName: "centuries",
              e: "changeMillennium",
              navStep: 1e3,
            },
          ],
          validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
          nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
          parseFormat: function (t) {
            if (
              "function" == typeof t.toValue &&
              "function" == typeof t.toDisplay
            )
              return t;
            var e = t.replace(this.validParts, "\0").split("\0"),
              i = t.match(this.validParts);
            if (!e || !e.length || !i || 0 === i.length)
              throw new Error("Invalid date format.");
            return { separators: e, parts: i };
          },
          parseDate: function (i, s, n, r) {
            function o(t, e) {
              return (
                !0 === e && (e = 10),
                t < 100 &&
                  (t += 2e3) > new Date().getFullYear() + e &&
                  (t -= 100),
                t
              );
            }
            function l() {
              var t = this.slice(0, h[p].length),
                e = h[p].slice(0, t.length);
              return t.toLowerCase() === e.toLowerCase();
            }
            if (!i) return e;
            if (i instanceof Date) return i;
            if (("string" == typeof s && (s = v.parseFormat(s)), s.toValue))
              return s.toValue(i, s, n);
            var h,
              c,
              d,
              p,
              f,
              g = {
                d: "moveDay",
                m: "moveMonth",
                w: "moveWeek",
                y: "moveYear",
              },
              y = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
            if (
              (i in y && (i = y[i]),
              /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(i))
            ) {
              for (
                h = i.match(/([\-+]\d+)([dmwy])/gi), i = new Date(), p = 0;
                p < h.length;
                p++
              )
                (c = h[p].match(/([\-+]\d+)([dmwy])/i)),
                  (d = Number(c[1])),
                  (f = g[c[2].toLowerCase()]),
                  (i = u.prototype[f](i, d));
              return u.prototype._zero_utc_time(i);
            }
            h = (i && i.match(this.nonpunctuation)) || [];
            var w,
              D,
              b = {},
              k = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
              C = {
                yyyy: function (t, e) {
                  return t.setUTCFullYear(r ? o(e, r) : e);
                },
                m: function (t, e) {
                  if (isNaN(t)) return t;
                  for (e -= 1; e < 0; ) e += 12;
                  for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e; )
                    t.setUTCDate(t.getUTCDate() - 1);
                  return t;
                },
                d: function (t, e) {
                  return t.setUTCDate(e);
                },
              };
            (C.yy = C.yyyy), (C.M = C.MM = C.mm = C.m), (C.dd = C.d), (i = a());
            var x = s.parts.slice();
            if (
              (h.length !== x.length &&
                (x = t(x)
                  .filter(function (e, i) {
                    return -1 !== t.inArray(i, k);
                  })
                  .toArray()),
              h.length === x.length)
            ) {
              var S;
              for (p = 0, S = x.length; p < S; p++) {
                if (((w = parseInt(h[p], 10)), (c = x[p]), isNaN(w)))
                  switch (c) {
                    case "MM":
                      (D = t(m[n].months).filter(l)),
                        (w = t.inArray(D[0], m[n].months) + 1);
                      break;
                    case "M":
                      (D = t(m[n].monthsShort).filter(l)),
                        (w = t.inArray(D[0], m[n].monthsShort) + 1);
                  }
                b[c] = w;
              }
              var _, M;
              for (p = 0; p < k.length; p++)
                (M = k[p]) in b &&
                  !isNaN(b[M]) &&
                  ((_ = new Date(i)), C[M](_, b[M]), isNaN(_) || (i = _));
            }
            return i;
          },
          formatDate: function (e, i, a) {
            if (!e) return "";
            if (("string" == typeof i && (i = v.parseFormat(i)), i.toDisplay))
              return i.toDisplay(e, i, a);
            var s = {
              d: e.getUTCDate(),
              D: m[a].daysShort[e.getUTCDay()],
              DD: m[a].days[e.getUTCDay()],
              m: e.getUTCMonth() + 1,
              M: m[a].monthsShort[e.getUTCMonth()],
              MM: m[a].months[e.getUTCMonth()],
              yy: e.getUTCFullYear().toString().substring(2),
              yyyy: e.getUTCFullYear(),
            };
            (s.dd = (s.d < 10 ? "0" : "") + s.d),
              (s.mm = (s.m < 10 ? "0" : "") + s.m),
              (e = []);
            for (
              var n = t.extend([], i.separators), r = 0, o = i.parts.length;
              r <= o;
              r++
            )
              n.length && e.push(n.shift()), e.push(s[i.parts[r]]);
            return e.join("");
          },
          headTemplate:
            '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
            f.templates.leftArrow +
            '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
            f.templates.rightArrow +
            "</th></tr></thead>",
          contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
          footTemplate:
            '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
        };
      (v.template =
        '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
        v.headTemplate +
        "<tbody></tbody>" +
        v.footTemplate +
        '</table></div><div class="datepicker-months"><table class="table-condensed">' +
        v.headTemplate +
        v.contTemplate +
        v.footTemplate +
        '</table></div><div class="datepicker-years"><table class="table-condensed">' +
        v.headTemplate +
        v.contTemplate +
        v.footTemplate +
        '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
        v.headTemplate +
        v.contTemplate +
        v.footTemplate +
        '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
        v.headTemplate +
        v.contTemplate +
        v.footTemplate +
        "</table></div></div>"),
        (t.fn.datepicker.DPGlobal = v),
        (t.fn.datepicker.noConflict = function () {
          return (t.fn.datepicker = d), this;
        }),
        (t.fn.datepicker.version = "1.7.1"),
        (t.fn.datepicker.deprecated = function (t) {
          var e = window.console;
          e && e.warn && e.warn("DEPRECATED: " + t);
        }),
        t(document).on(
          "focus.datepicker.data-api click.datepicker.data-api",
          '[data-provide="datepicker"]',
          function (e) {
            var i = t(this);
            i.data("datepicker") || (e.preventDefault(), p.call(i, "show"));
          }
        ),
        t(function () {
          p.call(t('[data-provide="datepicker-inline"]'));
        });
    });
  },
  function (t, e) {
    t.exports = jQuery;
  },
  function (t, e, i) {
    "use strict";
    var a = i(4),
      s = i.n(a);
    jQuery &&
      "undefined" != typeof jQuery &&
      (jQuery.fn.customSlider = function (t) {
        var e =
          " Please consult the documentation for more information: https://designrevision.com/docs/shards";
        if (void 0 === t)
          throw new Error(
            "Shards's custom slider component requires a configuration object." +
              e
          );
        if (
          ([
            { prop: "start", example: "start: [25, 70]" },
            { prop: "range", example: "range: { 'min': 0, 'max': 100 }" },
          ].map(function (i) {
            if (void 0 === t[i.prop])
              throw new Error(
                "Shards's custom slider component requires a `" +
                  i.prop +
                  "` property passed in the configuration object. For example: `" +
                  i.example +
                  "`" +
                  e
              );
          }),
          this.length && void 0 !== this[0])
        )
          for (var i = 0; i < this.length; i++) {
            s.a.create(this[i], t);
            var a = jQuery(this[i]).find(".custom-slider-input");
            if (!a.length || a.length < t.start.length)
              throw new Error(
                "You need to provide a .custom-slider-input for each start value."
              );
            var n = this;
            jQuery.each(a, function (e, s) {
              e !== t.start.length &&
                n[i].noUiSlider.on("update", function (t, i) {
                  a[e].value = t[e];
                });
            });
          }
        return this;
      });
  },
  function (t, e, i) {
    var a, s, n;
    !(function (i) {
      (s = []),
        void 0 !== (n = "function" == typeof (a = i) ? a.apply(e, s) : a) &&
          (t.exports = n);
    })(function () {
      "use strict";
      function t(t) {
        return (
          "object" == typeof t &&
          "function" == typeof t.to &&
          "function" == typeof t.from
        );
      }
      function e(t) {
        t.parentElement.removeChild(t);
      }
      function i(t) {
        t.preventDefault();
      }
      function a(t) {
        return t.filter(function (t) {
          return !this[t] && (this[t] = !0);
        }, {});
      }
      function s(t, e) {
        return Math.round(t / e) * e;
      }
      function n(t, e) {
        var i = t.getBoundingClientRect(),
          a = t.ownerDocument,
          s = a.documentElement,
          n = f(a);
        return (
          /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (n.x = 0),
          e ? i.top + n.y - s.clientTop : i.left + n.x - s.clientLeft
        );
      }
      function r(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t);
      }
      function o(t, e, i) {
        i > 0 &&
          (c(t, e),
          setTimeout(function () {
            d(t, e);
          }, i));
      }
      function l(t) {
        return Math.max(Math.min(t, 100), 0);
      }
      function h(t) {
        return Array.isArray(t) ? t : [t];
      }
      function u(t) {
        var e = (t = String(t)).split(".");
        return e.length > 1 ? e[1].length : 0;
      }
      function c(t, e) {
        t.classList ? t.classList.add(e) : (t.className += " " + e);
      }
      function d(t, e) {
        t.classList
          ? t.classList.remove(e)
          : (t.className = t.className.replace(
              new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"),
              " "
            ));
      }
      function p(t, e) {
        return t.classList
          ? t.classList.contains(e)
          : new RegExp("\\b" + e + "\\b").test(t.className);
      }
      function f(t) {
        var e = void 0 !== window.pageXOffset,
          i = "CSS1Compat" === (t.compatMode || "");
        return {
          x: e
            ? window.pageXOffset
            : i
            ? t.documentElement.scrollLeft
            : t.body.scrollLeft,
          y: e
            ? window.pageYOffset
            : i
            ? t.documentElement.scrollTop
            : t.body.scrollTop,
        };
      }
      function g() {
        return window.navigator.pointerEnabled
          ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
          : window.navigator.msPointerEnabled
          ? {
              start: "MSPointerDown",
              move: "MSPointerMove",
              end: "MSPointerUp",
            }
          : {
              start: "mousedown touchstart",
              move: "mousemove touchmove",
              end: "mouseup touchend",
            };
      }
      function m() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0;
            },
          });
          window.addEventListener("test", null, e);
        } catch (t) {}
        return t;
      }
      function v() {
        return (
          window.CSS && CSS.supports && CSS.supports("touch-action", "none")
        );
      }
      function y(t, e) {
        return 100 / (e - t);
      }
      function w(t, e) {
        return (100 * e) / (t[1] - t[0]);
      }
      function D(t, e) {
        return w(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0]);
      }
      function b(t, e) {
        return (e * (t[1] - t[0])) / 100 + t[0];
      }
      function k(t, e) {
        for (var i = 1; t >= e[i]; ) i += 1;
        return i;
      }
      function C(t, e, i) {
        if (i >= t.slice(-1)[0]) return 100;
        var a,
          s,
          n,
          r,
          o = k(i, t);
        return (
          (a = t[o - 1]),
          (s = t[o]),
          (n = e[o - 1]),
          (r = e[o]),
          n + D([a, s], i) / y(n, r)
        );
      }
      function x(t, e, i) {
        if (i >= 100) return t.slice(-1)[0];
        var a,
          s,
          n,
          r,
          o = k(i, e);
        return (
          (a = t[o - 1]),
          (s = t[o]),
          (n = e[o - 1]),
          (r = e[o]),
          b([a, s], (i - n) * y(n, r))
        );
      }
      function S(t, e, i, a) {
        if (100 === a) return a;
        var n,
          r,
          o = k(a, t);
        return i
          ? ((n = t[o - 1]), (r = t[o]), a - n > (r - n) / 2 ? r : n)
          : e[o - 1]
          ? t[o - 1] + s(a - t[o - 1], e[o - 1])
          : a;
      }
      function _(t, e, i) {
        var a;
        if (
          ("number" == typeof e && (e = [e]),
          "[object Array]" !== Object.prototype.toString.call(e))
        )
          throw new Error(
            "noUiSlider (" + G + "): 'range' contains invalid value."
          );
        if (
          ((a = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)),
          !r(a) || !r(e[0]))
        )
          throw new Error(
            "noUiSlider (" + G + "): 'range' value isn't numeric."
          );
        i.xPct.push(a),
          i.xVal.push(e[0]),
          a
            ? i.xSteps.push(!isNaN(e[1]) && e[1])
            : isNaN(e[1]) || (i.xSteps[0] = e[1]),
          i.xHighestCompleteStep.push(0);
      }
      function M(t, e, i) {
        if (!e) return !0;
        i.xSteps[t] =
          w([i.xVal[t], i.xVal[t + 1]], e) / y(i.xPct[t], i.xPct[t + 1]);
        var a = (i.xVal[t + 1] - i.xVal[t]) / i.xNumSteps[t],
          s = Math.ceil(Number(a.toFixed(3)) - 1),
          n = i.xVal[t] + i.xNumSteps[t] * s;
        i.xHighestCompleteStep[t] = n;
      }
      function T(t, e, i) {
        (this.xPct = []),
          (this.xVal = []),
          (this.xSteps = [i || !1]),
          (this.xNumSteps = [!1]),
          (this.xHighestCompleteStep = []),
          (this.snap = e);
        var a,
          s = [];
        for (a in t) t.hasOwnProperty(a) && s.push([t[a], a]);
        for (
          s.length && "object" == typeof s[0][0]
            ? s.sort(function (t, e) {
                return t[0][0] - e[0][0];
              })
            : s.sort(function (t, e) {
                return t[0] - e[0];
              }),
            a = 0;
          a < s.length;
          a++
        )
          _(s[a][1], s[a][0], this);
        for (
          this.xNumSteps = this.xSteps.slice(0), a = 0;
          a < this.xNumSteps.length;
          a++
        )
          M(a, this.xNumSteps[a], this);
      }
      function U(e) {
        if (t(e)) return !0;
        throw new Error(
          "noUiSlider (" + G + "): 'format' requires 'to' and 'from' methods."
        );
      }
      function E(t, e) {
        if (!r(e))
          throw new Error("noUiSlider (" + G + "): 'step' is not numeric.");
        t.singleStep = e;
      }
      function N(t, e) {
        if ("object" != typeof e || Array.isArray(e))
          throw new Error("noUiSlider (" + G + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max)
          throw new Error(
            "noUiSlider (" + G + "): Missing 'min' or 'max' in 'range'."
          );
        if (e.min === e.max)
          throw new Error(
            "noUiSlider (" + G + "): 'range' 'min' and 'max' cannot be equal."
          );
        t.spectrum = new T(e, t.snap, t.singleStep);
      }
      function V(t, e) {
        if (((e = h(e)), !Array.isArray(e) || !e.length))
          throw new Error(
            "noUiSlider (" + G + "): 'start' option is incorrect."
          );
        (t.handles = e.length), (t.start = e);
      }
      function F(t, e) {
        if (((t.snap = e), "boolean" != typeof e))
          throw new Error(
            "noUiSlider (" + G + "): 'snap' option must be a boolean."
          );
      }
      function O(t, e) {
        if (((t.animate = e), "boolean" != typeof e))
          throw new Error(
            "noUiSlider (" + G + "): 'animate' option must be a boolean."
          );
      }
      function A(t, e) {
        if (((t.animationDuration = e), "number" != typeof e))
          throw new Error(
            "noUiSlider (" +
              G +
              "): 'animationDuration' option must be a number."
          );
      }
      function Y(t, e) {
        var i,
          a = [!1];
        if (
          ("lower" === e ? (e = [!0, !1]) : "upper" === e && (e = [!1, !0]),
          !0 === e || !1 === e)
        ) {
          for (i = 1; i < t.handles; i++) a.push(e);
          a.push(!1);
        } else {
          if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
            throw new Error(
              "noUiSlider (" +
                G +
                "): 'connect' option doesn't match handle count."
            );
          a = e;
        }
        t.connect = a;
      }
      function P(t, e) {
        switch (e) {
          case "horizontal":
            t.ort = 0;
            break;
          case "vertical":
            t.ort = 1;
            break;
          default:
            throw new Error(
              "noUiSlider (" + G + "): 'orientation' option is invalid."
            );
        }
      }
      function W(t, e) {
        if (!r(e))
          throw new Error(
            "noUiSlider (" + G + "): 'margin' option must be numeric."
          );
        if (0 !== e && ((t.margin = t.spectrum.getMargin(e)), !t.margin))
          throw new Error(
            "noUiSlider (" +
              G +
              "): 'margin' option is only supported on linear sliders."
          );
      }
      function z(t, e) {
        if (!r(e))
          throw new Error(
            "noUiSlider (" + G + "): 'limit' option must be numeric."
          );
        if (((t.limit = t.spectrum.getMargin(e)), !t.limit || t.handles < 2))
          throw new Error(
            "noUiSlider (" +
              G +
              "): 'limit' option is only supported on linear sliders with 2 or more handles."
          );
      }
      function j(t, e) {
        if (!r(e))
          throw new Error(
            "noUiSlider (" + G + "): 'padding' option must be numeric."
          );
        if (0 !== e) {
          if (((t.padding = t.spectrum.getMargin(e)), !t.padding))
            throw new Error(
              "noUiSlider (" +
                G +
                "): 'padding' option is only supported on linear sliders."
            );
          if (t.padding < 0)
            throw new Error(
              "noUiSlider (" +
                G +
                "): 'padding' option must be a positive number."
            );
          if (t.padding >= 50)
            throw new Error(
              "noUiSlider (" +
                G +
                "): 'padding' option must be less than half the range."
            );
        }
      }
      function L(t, e) {
        switch (e) {
          case "ltr":
            t.dir = 0;
            break;
          case "rtl":
            t.dir = 1;
            break;
          default:
            throw new Error(
              "noUiSlider (" + G + "): 'direction' option was not recognized."
            );
        }
      }
      function H(t, e) {
        if ("string" != typeof e)
          throw new Error(
            "noUiSlider (" +
              G +
              "): 'behaviour' must be a string containing options."
          );
        var i = e.indexOf("tap") >= 0,
          a = e.indexOf("drag") >= 0,
          s = e.indexOf("fixed") >= 0,
          n = e.indexOf("snap") >= 0,
          r = e.indexOf("hover") >= 0;
        if (s) {
          if (2 !== t.handles)
            throw new Error(
              "noUiSlider (" +
                G +
                "): 'fixed' behaviour must be used with 2 handles"
            );
          W(t, t.start[1] - t.start[0]);
        }
        t.events = { tap: i || n, drag: a, fixed: s, snap: n, hover: r };
      }
      function I(t, e) {
        if (((t.multitouch = e), "boolean" != typeof e))
          throw new Error(
            "noUiSlider (" + G + "): 'multitouch' option must be a boolean."
          );
      }
      function R(t, e) {
        if (!1 !== e)
          if (!0 === e) {
            t.tooltips = [];
            for (var i = 0; i < t.handles; i++) t.tooltips.push(!0);
          } else {
            if (((t.tooltips = h(e)), t.tooltips.length !== t.handles))
              throw new Error(
                "noUiSlider (" + G + "): must pass a formatter for all handles."
              );
            t.tooltips.forEach(function (t) {
              if (
                "boolean" != typeof t &&
                ("object" != typeof t || "function" != typeof t.to)
              )
                throw new Error(
                  "noUiSlider (" +
                    G +
                    "): 'tooltips' must be passed a formatter or 'false'."
                );
            });
          }
      }
      function q(t, e) {
        (t.ariaFormat = e), U(e);
      }
      function B(t, e) {
        (t.format = e), U(e);
      }
      function J(t, e) {
        if (void 0 !== e && "string" != typeof e && !1 !== e)
          throw new Error(
            "noUiSlider (" + G + "): 'cssPrefix' must be a string or `false`."
          );
        t.cssPrefix = e;
      }
      function Q(t, e) {
        if (void 0 !== e && "object" != typeof e)
          throw new Error(
            "noUiSlider (" + G + "): 'cssClasses' must be an object."
          );
        if ("string" == typeof t.cssPrefix) {
          t.cssClasses = {};
          for (var i in e)
            e.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + e[i]);
        } else t.cssClasses = e;
      }
      function X(t, e) {
        if (!0 !== e && !1 !== e)
          throw new Error(
            "noUiSlider (" +
              G +
              "): 'useRequestAnimationFrame' option should be true (default) or false."
          );
        t.useRequestAnimationFrame = e;
      }
      function $(t) {
        var e = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: !0,
            animationDuration: 300,
            ariaFormat: Z,
            format: Z,
          },
          i = {
            step: { r: !1, t: E },
            start: { r: !0, t: V },
            connect: { r: !0, t: Y },
            direction: { r: !0, t: L },
            snap: { r: !1, t: F },
            animate: { r: !1, t: O },
            animationDuration: { r: !1, t: A },
            range: { r: !0, t: N },
            orientation: { r: !1, t: P },
            margin: { r: !1, t: W },
            limit: { r: !1, t: z },
            padding: { r: !1, t: j },
            behaviour: { r: !0, t: H },
            multitouch: { r: !0, t: I },
            ariaFormat: { r: !1, t: q },
            format: { r: !1, t: B },
            tooltips: { r: !1, t: R },
            cssPrefix: { r: !1, t: J },
            cssClasses: { r: !1, t: Q },
            useRequestAnimationFrame: { r: !1, t: X },
          },
          a = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            multitouch: !1,
            orientation: "horizontal",
            cssPrefix: "noUi-",
            cssClasses: {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              ltr: "ltr",
              rtl: "rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            useRequestAnimationFrame: !0,
          };
        t.format && !t.ariaFormat && (t.ariaFormat = t.format),
          Object.keys(i).forEach(function (s) {
            if (void 0 === t[s] && void 0 === a[s]) {
              if (i[s].r)
                throw new Error(
                  "noUiSlider (" + G + "): '" + s + "' is required."
                );
              return !0;
            }
            i[s].t(e, void 0 === t[s] ? a[s] : t[s]);
          }),
          (e.pips = t.pips);
        var s = [
          ["left", "top"],
          ["right", "bottom"],
        ];
        return (
          (e.style = s[e.dir][e.ort]),
          (e.styleOposite = s[e.dir ? 0 : 1][e.ort]),
          e
        );
      }
      function K(t, s, r) {
        function u(t, e) {
          var i = ct.createElement("div");
          return e && c(i, e), t.appendChild(i), i;
        }
        function y(t, e) {
          var i = u(t, s.cssClasses.origin),
            a = u(i, s.cssClasses.handle);
          return (
            a.setAttribute("data-handle", e),
            a.setAttribute("tabindex", "0"),
            a.setAttribute("role", "slider"),
            a.setAttribute(
              "aria-orientation",
              s.ort ? "vertical" : "horizontal"
            ),
            0 === e
              ? c(a, s.cssClasses.handleLower)
              : e === s.handles - 1 && c(a, s.cssClasses.handleUpper),
            i
          );
        }
        function w(t, e) {
          return !!e && u(t, s.cssClasses.connect);
        }
        function D(t, e) {
          return !!s.tooltips[e] && u(t.firstChild, s.cssClasses.tooltip);
        }
        function b(t, e, i) {
          if ("range" === t || "steps" === t) return lt.xVal;
          if ("count" === t) {
            if (!e)
              throw new Error(
                "noUiSlider (" + G + "): 'values' required for mode 'count'."
              );
            var a,
              s = 100 / (e - 1),
              n = 0;
            for (e = []; (a = n++ * s) <= 100; ) e.push(a);
            t = "positions";
          }
          return "positions" === t
            ? e.map(function (t) {
                return lt.fromStepping(i ? lt.getStep(t) : t);
              })
            : "values" === t
            ? i
              ? e.map(function (t) {
                  return lt.fromStepping(lt.getStep(lt.toStepping(t)));
                })
              : e
            : void 0;
        }
        function k(t, e, i) {
          function s(t, e) {
            return (t + e).toFixed(7) / 1;
          }
          var n = {},
            r = lt.xVal[0],
            o = lt.xVal[lt.xVal.length - 1],
            l = !1,
            h = !1,
            u = 0;
          return (
            (i = a(
              i.slice().sort(function (t, e) {
                return t - e;
              })
            ))[0] !== r && (i.unshift(r), (l = !0)),
            i[i.length - 1] !== o && (i.push(o), (h = !0)),
            i.forEach(function (a, r) {
              var o,
                c,
                d,
                p,
                f,
                g,
                m,
                v,
                y,
                w = a,
                D = i[r + 1];
              if (
                ("steps" === e && (o = lt.xNumSteps[r]),
                o || (o = D - w),
                !1 !== w && void 0 !== D)
              )
                for (o = Math.max(o, 1e-7), c = w; c <= D; c = s(c, o)) {
                  for (
                    m = (f = (p = lt.toStepping(c)) - u) / t,
                      y = f / (v = Math.round(m)),
                      d = 1;
                    d <= v;
                    d += 1
                  )
                    n[(u + d * y).toFixed(5)] = ["x", 0];
                  (g = i.indexOf(c) > -1 ? 1 : "steps" === e ? 2 : 0),
                    !r && l && (g = 0),
                    (c === D && h) || (n[p.toFixed(5)] = [c, g]),
                    (u = p);
                }
            }),
            n
          );
        }
        function C(t, e, i) {
          function a(t, e) {
            var i = e === s.cssClasses.value,
              a = i ? h : d,
              n = i ? o : l;
            return e + " " + a[s.ort] + " " + n[t];
          }
          function n(t, n) {
            n[1] = n[1] && e ? e(n[0], n[1]) : n[1];
            var o = u(r, !1);
            (o.className = a(n[1], s.cssClasses.marker)),
              (o.style[s.style] = t + "%"),
              n[1] &&
                (((o = u(r, !1)).className = a(n[1], s.cssClasses.value)),
                (o.style[s.style] = t + "%"),
                (o.innerText = i.to(n[0])));
          }
          var r = ct.createElement("div"),
            o = [
              s.cssClasses.valueNormal,
              s.cssClasses.valueLarge,
              s.cssClasses.valueSub,
            ],
            l = [
              s.cssClasses.markerNormal,
              s.cssClasses.markerLarge,
              s.cssClasses.markerSub,
            ],
            h = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
            d = [s.cssClasses.markerHorizontal, s.cssClasses.markerVertical];
          return (
            c(r, s.cssClasses.pips),
            c(
              r,
              0 === s.ort
                ? s.cssClasses.pipsHorizontal
                : s.cssClasses.pipsVertical
            ),
            Object.keys(t).forEach(function (e) {
              n(e, t[e]);
            }),
            r
          );
        }
        function x() {
          et && (e(et), (et = null));
        }
        function S(t) {
          x();
          var e = t.mode,
            i = t.density || 1,
            a = t.filter || !1,
            s = k(i, e, b(e, t.values || !1, t.stepped || !1)),
            n = t.format || { to: Math.round };
          return (et = st.appendChild(C(s, a, n)));
        }
        function _() {
          var t = X.getBoundingClientRect(),
            e = "offset" + ["Width", "Height"][s.ort];
          return 0 === s.ort ? t.width || X[e] : t.height || X[e];
        }
        function M(t, e, i, a) {
          var n = function (n) {
              return (
                !st.hasAttribute("disabled") &&
                !p(st, s.cssClasses.tap) &&
                !!(n = T(n, a.pageOffset, a.target || e)) &&
                !(t === it.start && void 0 !== n.buttons && n.buttons > 1) &&
                (!a.hover || !n.buttons) &&
                (at || n.preventDefault(),
                (n.calcPoint = n.points[s.ort]),
                void i(n, a))
              );
            },
            r = [];
          return (
            t.split(" ").forEach(function (t) {
              e.addEventListener(t, n, !!at && { passive: !0 }), r.push([t, n]);
            }),
            r
          );
        }
        function T(t, e, i) {
          var a,
            n,
            r = 0 === t.type.indexOf("touch"),
            o = 0 === t.type.indexOf("mouse"),
            l = 0 === t.type.indexOf("pointer");
          if (
            (0 === t.type.indexOf("MSPointer") && (l = !0), r && s.multitouch)
          ) {
            var h = function (t) {
              return t.target === i || i.contains(t.target);
            };
            if ("touchstart" === t.type) {
              var u = Array.prototype.filter.call(t.touches, h);
              if (u.length > 1) return !1;
              (a = u[0].pageX), (n = u[0].pageY);
            } else {
              var c = Array.prototype.find.call(t.changedTouches, h);
              if (!c) return !1;
              (a = c.pageX), (n = c.pageY);
            }
          } else if (r) {
            if (t.touches.length > 1) return !1;
            (a = t.changedTouches[0].pageX), (n = t.changedTouches[0].pageY);
          }
          return (
            (e = e || f(ct)),
            (o || l) && ((a = t.clientX + e.x), (n = t.clientY + e.y)),
            (t.pageOffset = e),
            (t.points = [a, n]),
            (t.cursor = o || l),
            t
          );
        }
        function U(t) {
          var e = (100 * (t - n(X, s.ort))) / _();
          return s.dir ? 100 - e : e;
        }
        function E(t) {
          var e = 100,
            i = !1;
          return (
            K.forEach(function (a, s) {
              if (!a.hasAttribute("disabled")) {
                var n = Math.abs(nt[s] - t);
                n < e && ((i = s), (e = n));
              }
            }),
            i
          );
        }
        function N(t, e, i, a) {
          var s = i.slice(),
            n = [!t, t],
            r = [t, !t];
          (a = a.slice()),
            t && a.reverse(),
            a.length > 1
              ? a.forEach(function (t, i) {
                  var a = z(s, t, s[t] + e, n[i], r[i], !1);
                  !1 === a ? (e = 0) : ((e = a - s[t]), (s[t] = a));
                })
              : (n = r = [!0]);
          var o = !1;
          a.forEach(function (t, a) {
            o = I(t, i[t] + e, n[a], r[a]) || o;
          }),
            o &&
              a.forEach(function (t) {
                V("update", t), V("slide", t);
              });
        }
        function V(t, e, i) {
          Object.keys(ut).forEach(function (a) {
            var n = a.split(".")[0];
            t === n &&
              ut[a].forEach(function (t) {
                t.call(
                  tt,
                  ht.map(s.format.to),
                  e,
                  ht.slice(),
                  i || !1,
                  nt.slice()
                );
              });
          });
        }
        function F(t, e) {
          "mouseout" === t.type &&
            "HTML" === t.target.nodeName &&
            null === t.relatedTarget &&
            A(t, e);
        }
        function O(t, e) {
          if (
            -1 === navigator.appVersion.indexOf("MSIE 9") &&
            0 === t.buttons &&
            0 !== e.buttonsProperty
          )
            return A(t, e);
          var i = (s.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
          N(i > 0, (100 * i) / e.baseSize, e.locations, e.handleNumbers);
        }
        function A(t, e) {
          e.handle && (d(e.handle, s.cssClasses.active), (ot -= 1)),
            e.listeners.forEach(function (t) {
              dt.removeEventListener(t[0], t[1]);
            }),
            0 === ot &&
              (d(st, s.cssClasses.drag),
              H(),
              t.cursor &&
                ((pt.style.cursor = ""),
                pt.removeEventListener("selectstart", i))),
            e.handleNumbers.forEach(function (t) {
              V("change", t), V("set", t), V("end", t);
            });
        }
        function Y(t, e) {
          var a;
          if (1 === e.handleNumbers.length) {
            var n = K[e.handleNumbers[0]];
            if (n.hasAttribute("disabled")) return !1;
            (a = n.children[0]), (ot += 1), c(a, s.cssClasses.active);
          }
          t.stopPropagation();
          var r = [],
            o = M(it.move, dt, O, {
              target: t.target,
              handle: a,
              listeners: r,
              startCalcPoint: t.calcPoint,
              baseSize: _(),
              pageOffset: t.pageOffset,
              handleNumbers: e.handleNumbers,
              buttonsProperty: t.buttons,
              locations: nt.slice(),
            }),
            l = M(it.end, dt, A, {
              target: t.target,
              handle: a,
              listeners: r,
              handleNumbers: e.handleNumbers,
            }),
            h = M("mouseout", dt, F, {
              target: t.target,
              handle: a,
              listeners: r,
              handleNumbers: e.handleNumbers,
            });
          r.push.apply(r, o.concat(l, h)),
            t.cursor &&
              ((pt.style.cursor = getComputedStyle(t.target).cursor),
              K.length > 1 && c(st, s.cssClasses.drag),
              pt.addEventListener("selectstart", i, !1)),
            e.handleNumbers.forEach(function (t) {
              V("start", t);
            });
        }
        function P(t) {
          t.stopPropagation();
          var e = U(t.calcPoint),
            i = E(e);
          if (!1 === i) return !1;
          s.events.snap || o(st, s.cssClasses.tap, s.animationDuration),
            I(i, e, !0, !0),
            H(),
            V("slide", i, !0),
            V("update", i, !0),
            V("change", i, !0),
            V("set", i, !0),
            s.events.snap && Y(t, { handleNumbers: [i] });
        }
        function W(t) {
          var e = U(t.calcPoint),
            i = lt.getStep(e),
            a = lt.fromStepping(i);
          Object.keys(ut).forEach(function (t) {
            "hover" === t.split(".")[0] &&
              ut[t].forEach(function (t) {
                t.call(tt, a);
              });
          });
        }
        function z(t, e, i, a, n, r) {
          return (
            K.length > 1 &&
              (a && e > 0 && (i = Math.max(i, t[e - 1] + s.margin)),
              n && e < K.length - 1 && (i = Math.min(i, t[e + 1] - s.margin))),
            K.length > 1 &&
              s.limit &&
              (a && e > 0 && (i = Math.min(i, t[e - 1] + s.limit)),
              n && e < K.length - 1 && (i = Math.max(i, t[e + 1] - s.limit))),
            s.padding &&
              (0 === e && (i = Math.max(i, s.padding)),
              e === K.length - 1 && (i = Math.min(i, 100 - s.padding))),
            (i = lt.getStep(i)),
            !((i = l(i)) === t[e] && !r) && i
          );
        }
        function j(t) {
          return t + "%";
        }
        function L(t, e) {
          (nt[t] = e), (ht[t] = lt.fromStepping(e));
          var i = function () {
            (K[t].style[s.style] = j(e)), R(t), R(t + 1);
          };
          window.requestAnimationFrame && s.useRequestAnimationFrame
            ? window.requestAnimationFrame(i)
            : i();
        }
        function H() {
          rt.forEach(function (t) {
            var e = nt[t] > 50 ? -1 : 1,
              i = 3 + (K.length + e * t);
            K[t].childNodes[0].style.zIndex = i;
          });
        }
        function I(t, e, i, a) {
          return !1 !== (e = z(nt, t, e, i, a, !1)) && (L(t, e), !0);
        }
        function R(t) {
          if (Z[t]) {
            var e = 0,
              i = 100;
            0 !== t && (e = nt[t - 1]),
              t !== Z.length - 1 && (i = nt[t]),
              (Z[t].style[s.style] = j(e)),
              (Z[t].style[s.styleOposite] = j(100 - i));
          }
        }
        function q(t, e) {
          null !== t &&
            !1 !== t &&
            ("number" == typeof t && (t = String(t)),
            !1 === (t = s.format.from(t)) ||
              isNaN(t) ||
              I(e, lt.toStepping(t), !1, !1));
        }
        function B(t, e) {
          var i = h(t),
            a = void 0 === nt[0];
          (e = void 0 === e || !!e),
            i.forEach(q),
            s.animate && !a && o(st, s.cssClasses.tap, s.animationDuration),
            rt.forEach(function (t) {
              I(t, nt[t], !0, !1);
            }),
            H(),
            rt.forEach(function (t) {
              V("update", t), null !== i[t] && e && V("set", t);
            });
        }
        function J() {
          var t = ht.map(s.format.to);
          return 1 === t.length ? t[0] : t;
        }
        function Q(t, e) {
          (ut[t] = ut[t] || []),
            ut[t].push(e),
            "update" === t.split(".")[0] &&
              K.forEach(function (t, e) {
                V("update", e);
              });
        }
        var X,
          K,
          Z,
          tt,
          et,
          it = g(),
          at = v() && m(),
          st = t,
          nt = [],
          rt = [],
          ot = 0,
          lt = s.spectrum,
          ht = [],
          ut = {},
          ct = t.ownerDocument,
          dt = ct.documentElement,
          pt = ct.body;
        if (st.noUiSlider)
          throw new Error(
            "noUiSlider (" + G + "): Slider was already initialized."
          );
        return (
          (function (t) {
            c(t, s.cssClasses.target),
              0 === s.dir ? c(t, s.cssClasses.ltr) : c(t, s.cssClasses.rtl),
              0 === s.ort
                ? c(t, s.cssClasses.horizontal)
                : c(t, s.cssClasses.vertical),
              (X = u(t, s.cssClasses.base));
          })(st),
          (function (t, e) {
            (K = []), (Z = []).push(w(e, t[0]));
            for (var i = 0; i < s.handles; i++)
              K.push(y(e, i)), (rt[i] = i), Z.push(w(e, t[i + 1]));
          })(s.connect, X),
          (tt = {
            destroy: function () {
              for (var t in s.cssClasses)
                s.cssClasses.hasOwnProperty(t) && d(st, s.cssClasses[t]);
              for (; st.firstChild; ) st.removeChild(st.firstChild);
              delete st.noUiSlider;
            },
            steps: function () {
              return nt.map(function (t, e) {
                var i = lt.getNearbySteps(t),
                  a = ht[e],
                  s = i.thisStep.step,
                  n = null;
                !1 !== s &&
                  a + s > i.stepAfter.startValue &&
                  (s = i.stepAfter.startValue - a),
                  (n =
                    a > i.thisStep.startValue
                      ? i.thisStep.step
                      : !1 !== i.stepBefore.step &&
                        a - i.stepBefore.highestStep),
                  100 === t ? (s = null) : 0 === t && (n = null);
                var r = lt.countStepDecimals();
                return (
                  null !== s && !1 !== s && (s = Number(s.toFixed(r))),
                  null !== n && !1 !== n && (n = Number(n.toFixed(r))),
                  [n, s]
                );
              });
            },
            on: Q,
            off: function (t) {
              var e = t && t.split(".")[0],
                i = e && t.substring(e.length);
              Object.keys(ut).forEach(function (t) {
                var a = t.split(".")[0],
                  s = t.substring(a.length);
                (e && e !== a) || (i && i !== s) || delete ut[t];
              });
            },
            get: J,
            set: B,
            reset: function (t) {
              B(s.start, t);
            },
            __moveHandles: function (t, e, i) {
              N(t, e, nt, i);
            },
            options: r,
            updateOptions: function (t, e) {
              var i = J(),
                a = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                ];
              a.forEach(function (e) {
                void 0 !== t[e] && (r[e] = t[e]);
              });
              var n = $(r);
              a.forEach(function (e) {
                void 0 !== t[e] && (s[e] = n[e]);
              }),
                (lt = n.spectrum),
                (s.margin = n.margin),
                (s.limit = n.limit),
                (s.padding = n.padding),
                s.pips && S(s.pips),
                (nt = []),
                B(t.start || i, e);
            },
            target: st,
            removePips: x,
            pips: S,
          }),
          (function (t) {
            t.fixed ||
              K.forEach(function (t, e) {
                M(it.start, t.children[0], Y, { handleNumbers: [e] });
              }),
              t.tap && M(it.start, X, P, {}),
              t.hover && M(it.move, X, W, { hover: !0 }),
              t.drag &&
                Z.forEach(function (e, i) {
                  if (!1 !== e && 0 !== i && i !== Z.length - 1) {
                    var a = K[i - 1],
                      n = K[i],
                      r = [e];
                    c(e, s.cssClasses.draggable),
                      t.fixed && (r.push(a.children[0]), r.push(n.children[0])),
                      r.forEach(function (t) {
                        M(it.start, t, Y, {
                          handles: [a, n],
                          handleNumbers: [i - 1, i],
                        });
                      });
                  }
                });
          })(s.events),
          B(s.start),
          s.pips && S(s.pips),
          s.tooltips &&
            (function () {
              var t = K.map(D);
              Q("update", function (e, i, a) {
                if (t[i]) {
                  var n = e[i];
                  !0 !== s.tooltips[i] && (n = s.tooltips[i].to(a[i])),
                    (t[i].innerHTML = n);
                }
              });
            })(),
          Q("update", function (t, e, i, a, n) {
            rt.forEach(function (t) {
              var e = K[t],
                a = z(nt, t, 0, !0, !0, !0),
                r = z(nt, t, 100, !0, !0, !0),
                o = n[t],
                l = s.ariaFormat.to(i[t]);
              e.children[0].setAttribute("aria-valuemin", a.toFixed(1)),
                e.children[0].setAttribute("aria-valuemax", r.toFixed(1)),
                e.children[0].setAttribute("aria-valuenow", o.toFixed(1)),
                e.children[0].setAttribute("aria-valuetext", l);
            });
          }),
          tt
        );
      }
      var G = "10.1.0";
      (T.prototype.getMargin = function (t) {
        var e = this.xNumSteps[0];
        if (e && (t / e) % 1 != 0)
          throw new Error(
            "noUiSlider (" +
              G +
              "): 'limit', 'margin' and 'padding' must be divisible by step."
          );
        return 2 === this.xPct.length && w(this.xVal, t);
      }),
        (T.prototype.toStepping = function (t) {
          return (t = C(this.xVal, this.xPct, t));
        }),
        (T.prototype.fromStepping = function (t) {
          return x(this.xVal, this.xPct, t);
        }),
        (T.prototype.getStep = function (t) {
          return (t = S(this.xPct, this.xSteps, this.snap, t));
        }),
        (T.prototype.getNearbySteps = function (t) {
          var e = k(t, this.xPct);
          return {
            stepBefore: {
              startValue: this.xVal[e - 2],
              step: this.xNumSteps[e - 2],
              highestStep: this.xHighestCompleteStep[e - 2],
            },
            thisStep: {
              startValue: this.xVal[e - 1],
              step: this.xNumSteps[e - 1],
              highestStep: this.xHighestCompleteStep[e - 1],
            },
            stepAfter: {
              startValue: this.xVal[e - 0],
              step: this.xNumSteps[e - 0],
              highestStep: this.xHighestCompleteStep[e - 0],
            },
          };
        }),
        (T.prototype.countStepDecimals = function () {
          var t = this.xNumSteps.map(u);
          return Math.max.apply(null, t);
        }),
        (T.prototype.convert = function (t) {
          return this.getStep(this.toStepping(t));
        });
      var Z = {
        to: function (t) {
          return void 0 !== t && t.toFixed(2);
        },
        from: Number,
      };
      return {
        version: G,
        create: function (t, e) {
          if (!t || !t.nodeName)
            throw new Error(
              "noUiSlider (" +
                G +
                "): create requires a single element, got: " +
                t
            );
          var i = K(t, $(e, t), e);
          return (t.noUiSlider = i), i;
        },
      };
    });
  },
]);
