# ExpressCraft.Bootstrap

[![NuGet](https://img.shields.io/nuget/v/ExpressCraft.Bootstrap.svg)](https://www.nuget.org/packages/ExpressCraft.Bootstrap) [![Built with Bridge.NET](https://img.shields.io/badge/built%20with-Bridge.NET-blue.svg)](http://bridge.net/)

Demo https://rawgit.com/samuelGrahame/ExpressCraft.Bootstrap/master/ExpressCraft.Bootstrap/Bridge/www/rawprev.html
ExpressCraft https://github.com/samuelGrahame/ExpressCraft

Example Invoice: https://rawgit.com/samuelGrahame/ExpressCraft.Bootstrap/master/Examples/ResponsivePerForm.html

# How to create a new BootstrapWindow - bootstrap -> boot

```csharp
public class Program
{
	public static void Main()
	{
		Application.Run(new BootWindow());
	}
}
```

# How to create BootstrapWindow's Responsive

```csharp

// AssignHandles() To assign Form Handle - Assign Responsive Class

public class Program
{
	public static void Main()
	{			
		Application.Run(
			new BootWindow().AssignHandles()
		);
	}
}
```
