﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft;

using ExpressCraft.Bootstrap;

namespace ExpressCraft.Bootstrap
{
	public class Program
	{
		public static void Demo()
		{

			Application.Run(new BootWindow(
				new Panel(
						BootTheme.Info,
						new PanelHeading(new Heading(HeadingType.H4, "ExpressCraft.Bootstrap Examples")),
						new PanelBody(
							new Button("Table", BootTheme.Info) { Block = true },
							new Button("Nabar", BootTheme.Info) { Block = true },
							new Button("Typography", BootTheme.Info) { Block = true },
							new Button("Grid", BootTheme.Info) { Block = true },
							new Button("Panel", BootTheme.Info) { Block = true },
							new Button("Form", BootTheme.Info) { Block = true }
							),
						new PanelFooter("Copyright © " + DateTime.Today.Year + " Samuel Grahame")
					)
				)
			{ Windowstate = WindowState.Maximized } .AssignHandles());

			//Action<MouseEvent> buttonClick = (ev) => { Global.Alert(ev.CurrentTarget.As<HTMLElement>().InnerHTML); };			
//			Application.Run(
//				new BootWindow(
//					new Panel(BootTheme.Default,
//						new PanelHeading("Welcome to ExpressCraft-Bootstrap"),
//						new PanelBody(
//							new BootSelectionWidget(
//								new FormGroupList(
//									new TextBox("Textbox"),
//									new CheckBox("checkbox", true),
//									new FormGroup(
//										new CheckBox("checkbox-inline 1", true) { Inline = true },
//										new CheckBox("checkbox-inline 2", true) { Inline = true },
//										new CheckBox("checkbox-inline 3", true) { Inline = true }
//										),
//									new TextBox("11/04/2017", InputType.Date),
//									new TextBox("Password", InputType.Password),
//									new TextArea("TextArea", 4),
//									new BootForm(BootFormType.Inline,
//										new Label(
//											"Email:",
//											new TextBox()
//										),
//										new Label(
//											"Password:",
//											new TextBox(InputType.Password)
//										),
//										new CheckBox("Remeber me"),
//										new Button("Submit", ButtonType.Submit)
//									),
//									new BootForm(BootFormType.Horizontal,
//										new Label(
//											"Email:",
//											new TextBox()
//										),
//										new Label(
//											"Password:",
//											new TextBox(InputType.Password)
//										),
//										new CheckBox("Remeber me"),
//										new Button("Submit", ButtonType.Submit)
//									),
//									new Button("Basic", BootTheme.None) { OnClick = buttonClick },
//									new Button("Default", BootTheme.Default) { OnClick = buttonClick },
//									new Button("Primary", BootTheme.Primary) { OnClick = buttonClick },
//									new Button("Success", BootTheme.Success) { OnClick = buttonClick },
//									new Button("Info", BootTheme.Info) { OnClick = buttonClick },
//									new Button("Warning", BootTheme.Warning) { OnClick = buttonClick },
//									new Button("Danger", BootTheme.Danger) { OnClick = buttonClick },
//									new Button("Link", BootTheme.Link) { OnClick = buttonClick }
//								),
//								new Heading(HeadingType.H2, "Heading", new Small(" - Heading Small")),
//									new ParagraphList(
//										"Text",
//										new Abbr("Abbr hover", "Abbr"),
//										new Small("Small"),
//										new Blockquote(new Paragraph("Block Quote Content"), new Footer("Block Quote From")),
//										new Blockquote(new Paragraph("Block Quote Content Reverse"), new Footer("Block Quote From Reverse")) { Reverse = true },
//										new DescriptionList(
//											new DescriptionTitle("Description Title 1"),
//											new DescriptionDetail("- Description Detail 1"),
//											new DescriptionTitle("Description Title 2"),
//											new DescriptionDetail("- Description Detail 2")),
//										new Paragraph("The following HTML elements: ", new Code("span"), ", ", new Code("section"), ", and ", new Code("div"), " defines a section in a document."),
//										new Paragraph("Use ", new Kbd("ctrl + p"), " to open the Print dialog box."),
//										new Pre(
//"Text in a pre element
//is displayed in a fixed-width
//font, and it preserves
//both      spaces and
//line breaks."),
//										new Paragraph(
//											new ParagraphList(
//												new Heading(HeadingType.H2, "Contextual Colors"),
//												new Paragraph("This text is muted.") { ContextualText = Contextual.Text.Muted },
//												new Paragraph("This text is important.") { ContextualText = Contextual.Text.Primary },
//												new Paragraph("This text indicates success.") { ContextualText = Contextual.Text.Success },
//												new Paragraph("This text represents some information.") { ContextualText = Contextual.Text.Info },
//												new Paragraph("This text represents a warning.") { ContextualText = Contextual.Text.Warning },
//												new Paragraph("This text represents danger.") { ContextualText = Contextual.Text.Danger }
//											)
//										),
//										new Paragraph(
//											new ParagraphList(
//												new Heading(HeadingType.H2, "Contextual Backgrounds"),
//												new Paragraph("This text is important.") { ContextualBackground = Contextual.Background.Primary },
//												new Paragraph("This text indicates success.") { ContextualBackground = Contextual.Background.Success },
//												new Paragraph("This text represents some information.") { ContextualBackground = Contextual.Background.Info },
//												new Paragraph("This text represents a warning.") { ContextualBackground = Contextual.Background.Warning },
//												new Paragraph("This text represents danger.") { ContextualBackground = Contextual.Background.Danger }
//											)
//										)
//									),
//									new Panel(BootTheme.Default,
//										new PanelHeading(
//											new Heading(HeadingType.H3, "Table Demo", new Small(" - Table options below.")),
//											new FormGroup(
//												new CheckBox("Striped", false)
//												{
//													OnCheckChanged = (s) => {
//														BootWidget.GetWidgetById<Table>("DemoTable").Striped = s.Checked;
//													},
//													Inline = true
//												},
//												new CheckBox("Bordered", false)
//												{
//													OnCheckChanged = (s) => {
//														BootWidget.GetWidgetById<Table>("DemoTable").Bordered = s.Checked;
//													},
//													Inline = true
//												},
//												new CheckBox("Hover", false)
//												{
//													OnCheckChanged = (s) => {
//														BootWidget.GetWidgetById<Table>("DemoTable").Hover = s.Checked;
//													},
//													Inline = true
//												},
//												new CheckBox("Condensed", false)
//												{
//													OnCheckChanged = (s) => {
//														BootWidget.GetWidgetById<Table>("DemoTable").Condensed = s.Checked;
//													},
//													Inline = true
//												},
//												new CheckBox("Contextual classes", false)
//												{
//													OnCheckChanged = (s) => {
//														var tbl = BootWidget.GetWidgetById<Table>("DemoTable");
//														if(s.Checked)
//														{
//															var body = tbl.TableBody;
//															body.Row(0).Theme = BootRowCellTheme.Active;
//															body.Row(2).Theme = BootRowCellTheme.Success;
//															body.Row(4).Theme = BootRowCellTheme.Info;
//															body.Row(6).Theme = BootRowCellTheme.Warning;
//															body.Row(8).Theme = BootRowCellTheme.Danger;
//														}
//														else
//														{
//															foreach(var item in tbl.TableBody.Rows)
//															{
//																item.ClearTheme();
//															}
//														}
//													},
//													Inline = true
//												}
//											)
//										),
//										new PanelBody(
//											new Table(
//												new TableHeader(
//													new TableHeaderRow(
//														"#",
//														"Table heading",
//														"Table heading",
//														"Table heading",
//														"Table heading",
//														"Table heading",
//														"Table heading"
//														)
//													),
//												new TableBody(
//													Enumerable.Range(0, 9).Select((x, index) => (Union<string, Control, HTMLElement>)new TableRow(
//													new TableHeaderCell((index + 1).ToString()), "Table cell", "Table cell", "Table cell", "Table cell", "Table cell", "Table cell")).ToArray()
//												)
//											)
//											{ Id = "DemoTable" }
//										),
//										new PanelFooter(
//											new Heading(HeadingType.H3, "How to access the table."),
//											new Pre(
//"var tbl = BootWidget.GetWidgetById<Table>(""DemoTable"");
//var body = tbl.TableBody;
//body.Row(0).Theme = BootRowCellTheme.Active;
//body.Row(2).Theme = BootRowCellTheme.Success;
//body.Row(4).Theme = BootRowCellTheme.Info;
//body.Row(6).Theme = BootRowCellTheme.Warning;
//body.Row(8).Theme = BootRowCellTheme.Danger;
//"
//											)
//										)
//									)

//								)
//						),
//						new PanelFooter(
//							"Footer"
//							)
//						)
//				)
//				{ Windowstate = WindowState.Maximized }
//			);
		}

		public static void Main()
		{
			Settings.IncludeFocusRegion = false;
			Settings.AllowCloseWithoutQuestion = true;
			Application.SetApplicationDefinition();
			
			BootWindow.SetupMetaTags();
		}
	}
}
