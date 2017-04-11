/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("ExpressCraft.Bootstrap", function ($asm, globals) {
    "use strict";

    Bridge.define("ExpressCraft.Bootstrap.BootstrapDiv", {
        inherits: [ExpressCraft.Control],
        statics: {
            appendTypos$1: function (control, typos) {
                if (typos === void 0) { typos = []; }
                ExpressCraft.Bootstrap.BootstrapDiv.appendTypos(control.content, typos);
            },
            appendTypos: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos != null) {
                    var length = typos.length;
                    for (var i = 0; i < length; i = (i + 1) | 0) {
                        if (Bridge.is(typos[i], String)) {
                            control.appendChild(document.createTextNode(typos[i]));
                        } else {
                            if (Bridge.is(typos[i], ExpressCraft.Control)) {
                                control.appendChild(ExpressCraft.Control.op_Implicit(typos[i]));
                            } else {
                                if (Bridge.is(typos[i], HTMLElement)) {
                                    control.appendChild(typos[i]);
                                }
                            }
                        }
                    }
                }
            }
        },
        $ctor1: function (typos) {
            if (typos === void 0) { typos = []; }

            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('div'), typos);

        },
        ctor: function (element, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Control.ctor.call(this, element);
            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos$1(this, typos);
        },
        getContextualText: function () {
            return this.getContextual("text-");
        },
        setContextualText: function (value) {
            this.setContextual("text-", value);
        },
        getContextualBackground: function () {
            return this.getContextual("bg-");
        },
        setContextualBackground: function (value) {
            this.setContextual("bg-", value);
        },
        getContextual: function (type) {
            var length = this.getClassList().length;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (System.String.startsWith(this.getClassList()[i], type)) {
                    return this.getClassList()[i];
                }
            }
            return "";
        },
        setContextual: function (type, value) {
            var length = this.getClassList().length;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (System.String.startsWith(this.getClassList()[i], type)) {
                    this.getClassList().remove(this.getClassList()[i]);
                    break;
                }
            }
            if (!System.String.isNullOrWhiteSpace(value) && System.String.startsWith(value, "text-")) {
                this.getClassList().add(value);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapForm", {
        inherits: [ExpressCraft.Form],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Form.ctor.call(this, "");
            var x = Bridge.cast((new ExpressCraft.Bootstrap.BootstrapStyleDiv("container")).content, HTMLDivElement);

            this.setBackColor(ExpressCraft.Color.op_Implicit$1(ExpressCraft.Color.getWhite().$clone()));
            this.getBody().appendChild(x);
            this.getBodyStyle().overflowY = "auto";

            this.setBody(x);
            this.getBodyStyle().padding = "0";
            this.setCalcSize();
            //this.Body.ClassName = "container " + this.Body.ClassName;			
            //this.Body.SetBounds(1, 29, "calc(100% - 2px)", "calc(100% - 30px)");			
            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos(this.getBody(), typos);
        },
        setCalcSize: function () {
            ExpressCraft.Helper.setSize$1(this.getBody(), "calc(100% - 28px)", this.getBody().style.height);
        },
        onResizing: function () {
            ExpressCraft.Form.prototype.onResizing.call(this);

            var x = this.content.getBoundingClientRect();
            if (x.width - 2 < 1170) {
                this.setCalcSize();
            } else {
                ExpressCraft.Helper.setSize$1(this.getBody(), "", this.getBody().style.height);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapTheme", {
        $kind: "enum",
        statics: {
            None: 0,
            Default: 1,
            Primary: 2,
            Success: 3,
            Info: 4,
            Warning: 5,
            Danger: 6,
            Link: 7
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Button", {
        inherits: [ExpressCraft.SimpleButton],
        ctor: function (text, type) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 1; }

            this.$initialize();
            ExpressCraft.SimpleButton.ctor.call(this, "button", false);
            this.getStyle().position = "relative";
            this.content.className = (System.String.concat("btn", ExpressCraft.Bootstrap.Extension.getClassTheme(" btn-", type), System.String.replaceAll(this.content.className, "simplebutton", ""))).trim();
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.setText(text);
            }
            this.setSize(new ExpressCraft.Vector2.$ctor1("", ""));
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Contextual");

    Bridge.define("ExpressCraft.Bootstrap.Contextual.Background", {
        statics: {
            Primary: "bg-primary",
            Success: "bg-success",
            Info: "bg-info",
            Warning: "bg-warning",
            Danger: "bg-danger"
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Contextual.Text", {
        statics: {
            Muted: "text-muted",
            Primary: "text-primary",
            Success: "text-success",
            Info: "text-info",
            Warning: "text-warning",
            Danger: "text-danger"
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Extension", {
        statics: {
            getClassTheme: function (cls, type) {
                if (type === ExpressCraft.Bootstrap.BootstrapTheme.None) {
                    return "";
                }
                return System.String.concat(cls, System.Enum.format(ExpressCraft.Bootstrap.BootstrapTheme, type, "G").toLowerCase());
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Program", {
        $main: function () {
            ExpressCraft.Settings.setIncludeFocusRegion(false);
            ExpressCraft.Application.setApplicationDefinition();

            ExpressCraft.Application.run(new ExpressCraft.Bootstrap.BootstrapForm([new ExpressCraft.Bootstrap.Panel(ExpressCraft.Bootstrap.BootstrapTheme.Default, [new ExpressCraft.Bootstrap.PanelHeading(["Welcome to ExpressCraft-Bootstrap"]), new ExpressCraft.Bootstrap.PanelBody([new ExpressCraft.Bootstrap.BootstrapSelectionDiv([new ExpressCraft.Bootstrap.FormGroup([new ExpressCraft.Bootstrap.TextBox("hello World")]), new ExpressCraft.Bootstrap.FormGroup([Bridge.merge(new ExpressCraft.Bootstrap.Button("Hello World", ExpressCraft.Bootstrap.BootstrapTheme.Success), {
                itemClick: $asm.$.ExpressCraft.Bootstrap.Program.f1
            } )]), new ExpressCraft.Bootstrap.Heading("h2", ["Heading", new ExpressCraft.Bootstrap.Small([" - Heading Small"])]), new ExpressCraft.Bootstrap.ParagraphList(["Text", new ExpressCraft.Bootstrap.Abbr("Abbr hover", ["Abbr"]), new ExpressCraft.Bootstrap.Small(["Small"]), new ExpressCraft.Bootstrap.Blockquote("Block Quote Content", "Block Quote From"), Bridge.merge(new ExpressCraft.Bootstrap.Blockquote("Block Quote Content Reverse", "Block Quote From Reverse"), {
                setReverse: true
            } ), new ExpressCraft.Bootstrap.DescriptionList([new ExpressCraft.Bootstrap.DescriptionTitle(["Description Title 1"]), new ExpressCraft.Bootstrap.DescriptionDetail(["- Description Detail 1"]), new ExpressCraft.Bootstrap.DescriptionTitle(["Description Title 2"]), new ExpressCraft.Bootstrap.DescriptionDetail(["- Description Detail 2"])])]), new ExpressCraft.Bootstrap.Paragraph(["The following HTML elements: ", new ExpressCraft.Bootstrap.Code(["span"]), ", ", new ExpressCraft.Bootstrap.Code(["section"]), ", and ", new ExpressCraft.Bootstrap.Code(["div"]), " defines a section in a document."]), new ExpressCraft.Bootstrap.Paragraph(["Use ", new ExpressCraft.Bootstrap.Kbd(["ctrl + p"]), " to open the Print dialog box."]), new ExpressCraft.Bootstrap.Pre(["Text in a pre element\r\nis displayed in a fixed-width\r\nfont, and it preserves\r\nboth      spaces and\r\nline breaks."])])]), new ExpressCraft.Bootstrap.PanelFooter(["Footer"])])]));
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.Program", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.Program, {
        f1: function (but) {
            Bridge.global.alert("Hello World");
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TextBox", {
        inherits: [ExpressCraft.TextInput],
        ctor: function (text, type) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 19; }

            this.$initialize();
            ExpressCraft.TextInput.ctor.call(this, type, false);
            this.getStyle().position = "relative";
            this.content.className = (System.String.concat("form-control", System.String.replaceAll(this.content.className, "inputcontrol", ""))).trim();
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.setText(text);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Abbr", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (title, typos) {
            if (title === void 0) { title = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("abbr"), typos);
            if (!System.String.isNullOrWhiteSpace(title)) {
                this.content.title = title;
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Blockquote", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        statics: {
            createBlock: function (paragraph, footer, typos) {
                if (typos === void 0) { typos = []; }
                var a = new (System.Collections.Generic.List$1(Object))();

                a.add(new ExpressCraft.Bootstrap.Paragraph([paragraph]));
                a.add(new ExpressCraft.Bootstrap.Footer([footer]));
                a.addRange(typos);

                return a.toArray();
            }
        },
        ctor: function (paragraph, footer, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("blockquote"), ExpressCraft.Bootstrap.Blockquote.createBlock(paragraph, footer, typos));

        },
        getReverse: function () {
            return this.getClassList().contains("blockquote-reverse");
        },
        setReverse: function (value) {
            if (value === this.getReverse()) {
                return;
            }
            if (value) {
                this.getClassList().add("blockquote-reverse");
            } else {
                this.getClassList().remove("blockquote-reverse");
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapSelectionDiv", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, Bridge.merge(document.createElement('div'), {
                className: "selection"
            } ), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapStyleDiv", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (className, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, Bridge.merge(document.createElement('div'), {
                className: className
            } ), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Code", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("code"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionDetail", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dd"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionList", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dl"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.DescriptionTitle", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("dt"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Footer", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("footer"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Heading", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (ht, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement(ht), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Kbd", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("kbd"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Mark", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("mark"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Paragraph", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('p'), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.ParagraphList", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement('div'));
            if (typos == null || typos.length === 0) {
                return;
            }

            var length = typos.length;
            var list = System.Array.init(length, null, Object);

            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (typos[i] == null) {
                    list[i] = new ExpressCraft.Bootstrap.Paragraph();
                    continue;
                }

                if (Bridge.is(typos[i], ExpressCraft.Bootstrap.Paragraph)) {
                    list[i] = typos[i];
                } else {
                    list[i] = new ExpressCraft.Bootstrap.Paragraph([typos[i]]);
                }

            }
            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos$1(this, list);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Pre", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("pre"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Small", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("small"), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.FormGroup", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "form-group", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.Panel", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (type, typos) {
            if (type === void 0) { type = 1; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, System.String.concat("panel", ExpressCraft.Bootstrap.Extension.getClassTheme(" panel-", type)), typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelBody", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-body", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelFooter", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-footer", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelGroup", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-group", typos);

        }
    });

    Bridge.define("ExpressCraft.Bootstrap.PanelHeading", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "panel-heading", typos);

        }
    });
});
