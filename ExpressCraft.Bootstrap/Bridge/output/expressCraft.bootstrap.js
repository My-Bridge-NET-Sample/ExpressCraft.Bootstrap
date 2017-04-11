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
            if (!System.String.isNullOrWhiteSpace(value) && System.String.startsWith(value, type)) {
                this.getClassList().add(value);
            }
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.BootstrapForm", {
        inherits: [ExpressCraft.Form],
        statics: {
            hasSetupMetaTags: false,
            setupMetaTags: function () {
                if (ExpressCraft.Bootstrap.BootstrapForm.hasSetupMetaTags) {
                    return;
                }

                ExpressCraft.Bootstrap.BootstrapForm.hasSetupMetaTags = true;
                document.head.appendChild(Bridge.merge(document.createElement('meta'), {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                } ));
                //<meta name="viewport" content="width=device-width, initial-scale=1">

            }
        },
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

            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos(this.getBody(), typos);
        },
        setCalcSize: function () {
            ExpressCraft.Helper.setSize$1(this.getBody(), "calc(100% - 28px)", this.getBody().style.height);
        },
        calcSizeOnChange: function () {
            var x = this.content.getBoundingClientRect();
            if (x.width - 2 < 1170) {
                this.setCalcSize();
            } else {
                ExpressCraft.Helper.setSize$1(this.getBody(), "", this.getBody().style.height);
            }
        },
        onShowed: function () {
            ExpressCraft.Form.prototype.onShowed.call(this);

            this.calcSizeOnChange();
        },
        onResizing: function () {
            ExpressCraft.Form.prototype.onResizing.call(this);

            this.calcSizeOnChange();
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
        inherits: [ExpressCraft.Control],
        ctor: function (text, type) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 1; }

            this.$initialize();
            ExpressCraft.Control.ctor.call(this, Bridge.merge(document.createElement('button'), {
                type: "button",
                className: System.String.concat("btn", ExpressCraft.Bootstrap.Extension.getClassTheme(" btn-", type))
            } ));
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.content.innerHTML = text;
            }
            this.setSize(new ExpressCraft.Vector2.$ctor1("", ""));
        },
        getOnClick: function () {
            return this.content.onclick;
        },
        setOnClick: function (value) {
            this.content.onclick = value;
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

            var buttonClick = $asm.$.ExpressCraft.Bootstrap.Program.f1;

            ExpressCraft.Bootstrap.BootstrapForm.setupMetaTags();

            ExpressCraft.Application.run(Bridge.merge(new ExpressCraft.Bootstrap.BootstrapForm([new ExpressCraft.Bootstrap.Panel(ExpressCraft.Bootstrap.BootstrapTheme.Default, [new ExpressCraft.Bootstrap.PanelHeading(["Welcome to ExpressCraft-Bootstrap"]), new ExpressCraft.Bootstrap.PanelBody([new ExpressCraft.Bootstrap.BootstrapSelectionDiv([new ExpressCraft.Bootstrap.FormGroupList([new ExpressCraft.Bootstrap.TextBox("Textbox"), new ExpressCraft.Bootstrap.CheckBox("checkbox", "true"), new ExpressCraft.Bootstrap.TextBox("11/04/2017", "date"), new ExpressCraft.Bootstrap.TextBox("Password", "password"), new ExpressCraft.Bootstrap.TextArea("TextArea", 4), Bridge.merge(new ExpressCraft.Bootstrap.Button("Basic", ExpressCraft.Bootstrap.BootstrapTheme.None), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button("Default", ExpressCraft.Bootstrap.BootstrapTheme.Default), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button("Primary", ExpressCraft.Bootstrap.BootstrapTheme.Primary), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button("Success", ExpressCraft.Bootstrap.BootstrapTheme.Success), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button("Info", ExpressCraft.Bootstrap.BootstrapTheme.Info), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button("Warning", ExpressCraft.Bootstrap.BootstrapTheme.Warning), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button("Danger", ExpressCraft.Bootstrap.BootstrapTheme.Danger), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Button("Link", ExpressCraft.Bootstrap.BootstrapTheme.Link), {
                setOnClick: buttonClick
            } )]), new ExpressCraft.Bootstrap.Heading("h2", ["Heading", new ExpressCraft.Bootstrap.Small([" - Heading Small"])]), new ExpressCraft.Bootstrap.ParagraphList(["Text", new ExpressCraft.Bootstrap.Abbr("Abbr hover", ["Abbr"]), new ExpressCraft.Bootstrap.Small(["Small"]), new ExpressCraft.Bootstrap.Blockquote("Block Quote Content", "Block Quote From"), Bridge.merge(new ExpressCraft.Bootstrap.Blockquote("Block Quote Content Reverse", "Block Quote From Reverse"), {
                setReverse: true
            } ), new ExpressCraft.Bootstrap.DescriptionList([new ExpressCraft.Bootstrap.DescriptionTitle(["Description Title 1"]), new ExpressCraft.Bootstrap.DescriptionDetail(["- Description Detail 1"]), new ExpressCraft.Bootstrap.DescriptionTitle(["Description Title 2"]), new ExpressCraft.Bootstrap.DescriptionDetail(["- Description Detail 2"])]), new ExpressCraft.Bootstrap.Paragraph(["The following HTML elements: ", new ExpressCraft.Bootstrap.Code(["span"]), ", ", new ExpressCraft.Bootstrap.Code(["section"]), ", and ", new ExpressCraft.Bootstrap.Code(["div"]), " defines a section in a document."]), new ExpressCraft.Bootstrap.Paragraph(["Use ", new ExpressCraft.Bootstrap.Kbd(["ctrl + p"]), " to open the Print dialog box."]), new ExpressCraft.Bootstrap.Pre(["Text in a pre element\r\nis displayed in a fixed-width\r\nfont, and it preserves\r\nboth      spaces and\r\nline breaks."]), new ExpressCraft.Bootstrap.Paragraph([new ExpressCraft.Bootstrap.ParagraphList([new ExpressCraft.Bootstrap.Heading("h2", ["Contextual Colors"]), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text is muted."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Muted
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text is important."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Primary
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text indicates success."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Success
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents some information."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Info
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents a warning."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Warning
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents danger."]), {
                setContextualText: ExpressCraft.Bootstrap.Contextual.Text.Danger
            } )])]), new ExpressCraft.Bootstrap.Paragraph([new ExpressCraft.Bootstrap.ParagraphList([new ExpressCraft.Bootstrap.Heading("h2", ["Contextual Backgrounds"]), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text is important."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Primary
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text indicates success."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Success
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents some information."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Info
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents a warning."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Warning
            } ), Bridge.merge(new ExpressCraft.Bootstrap.Paragraph(["This text represents danger."]), {
                setContextualBackground: ExpressCraft.Bootstrap.Contextual.Background.Danger
            } )])])])])]), new ExpressCraft.Bootstrap.PanelFooter(["Footer"])])]), {
                setWindowstate: ExpressCraft.WindowState.Maximized
            } ));
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.Program", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.Program, {
        f1: function (ev) {
            Bridge.global.alert(ev.currentTarget.innerHTML);
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TextArea", {
        inherits: [ExpressCraft.Control],
        prevText: "",
        onTextChanged: null,
        onKeyDown: null,
        onKeyUp: null,
        onKeyPress: null,
        ctor: function (text, rows) {
            if (text === void 0) { text = ""; }
            if (rows === void 0) { rows = 1; }

            this.$initialize();
            ExpressCraft.Control.ctor.call(this, Bridge.merge(document.createElement('textarea'), {
                className: "form-control"
            } ));
            this.setText(text);
            this.content.rows = Math.max(rows, 1);
            this.content.onchange = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.TextArea.f1);
            this.content.oncontextmenu = $asm.$.ExpressCraft.Bootstrap.TextArea.f2;
            this.content.onkeypress = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.TextArea.f3);
            this.content.onkeydown = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.TextArea.f4);
            this.content.onkeyup = Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.TextArea.f5);
            this.content.addEventListener("paste", Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.TextArea.f6));
            this.content.addEventListener("cut", Bridge.fn.bind(this, $asm.$.ExpressCraft.Bootstrap.TextArea.f6));
        },
        getText: function () {
            return this.content.innerHTML;
        },
        setText: function (value) {
            this.content.innerHTML = value;

            this.checkTextChanged();
        },
        checkTextChanged: function () {
            if (!Bridge.referenceEquals(this.getText(), this.prevText)) {
                if (!Bridge.staticEquals(this.onTextChanged, null)) {
                    this.onTextChanged(this);
                }
                this.prevText = this.getText();
            }
        },
        render: function () {
            ExpressCraft.Control.prototype.render.call(this);
            this.prevText = this.getText();
        }
    });

    Bridge.ns("ExpressCraft.Bootstrap.TextArea", $asm.$);

    Bridge.apply($asm.$.ExpressCraft.Bootstrap.TextArea, {
        f1: function (ev) {
            this.checkTextChanged();
        },
        f2: function (ev) {
            ev.stopPropagation();
        },
        f3: function (ev) {
            this.checkTextChanged();
            if (!Bridge.staticEquals(this.onKeyPress, null)) {
                this.onKeyPress(this, ev);
            }
        },
        f4: function (ev) {
            this.checkTextChanged();
            if (!Bridge.staticEquals(this.onKeyDown, null)) {
                this.onKeyDown(this, ev);
            }
        },
        f5: function (ev) {
            this.checkTextChanged();
            if (!Bridge.staticEquals(this.onKeyUp, null)) {
                this.onKeyUp(this, ev);
            }
        },
        f6: function () {
            this.checkTextChanged();
        }
    });

    Bridge.define("ExpressCraft.Bootstrap.TextBox", {
        inherits: [ExpressCraft.TextInput],
        ctor: function (text, type, className) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 19; }
            if (className === void 0) { className = "form-control"; }

            this.$initialize();
            ExpressCraft.TextInput.ctor.call(this, type, false);
            this.content.className = className;
            if (!System.String.isNullOrWhiteSpace(text)) {
                if (type === "date" || type === "datetime" || type === "datetime-local") {
                    this.setDate(text);
                } else {
                    if (type === "checkbox") {
                        ExpressCraft.Helper.setChecked$1(this, text);
                    } else {
                        this.setText(text);
                    }
                }
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

    Bridge.define("ExpressCraft.Bootstrap.FormGroupList", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.$ctor1.call(this);
            if (typos == null || typos.length === 0) {
                return;
            }

            var length = typos.length;
            var list = System.Array.init(length, null, Object);

            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (typos[i] == null) {
                    list[i] = new ExpressCraft.Bootstrap.FormGroup();
                    continue;
                }

                if (Bridge.is(typos[i], ExpressCraft.Bootstrap.FormGroup)) {
                    list[i] = typos[i];
                } else {
                    list[i] = new ExpressCraft.Bootstrap.FormGroup([typos[i]]);
                }

            }
            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos$1(this, list);
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

    Bridge.define("ExpressCraft.Bootstrap.Label", {
        inherits: [ExpressCraft.Bootstrap.BootstrapDiv],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapDiv.ctor.call(this, document.createElement("label"), typos);

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

    Bridge.define("ExpressCraft.Bootstrap.CheckBox", {
        inherits: [ExpressCraft.Bootstrap.BootstrapStyleDiv],
        checkBox: null,
        ctor: function (label, value) {
            if (value === void 0) { value = ""; }

            this.$initialize();
            ExpressCraft.Bootstrap.BootstrapStyleDiv.ctor.call(this, "checkbox");
            ExpressCraft.Bootstrap.BootstrapDiv.appendTypos$1(this, [new ExpressCraft.Bootstrap.Label([(this.checkBox = new ExpressCraft.Bootstrap.TextBox(value, "checkbox", "")), label])]);
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
