import { newVarInputVal } from "js/composer/varInputValManager";
import { browserCommands } from "js/composer/commands/browserCommands";

export const macosCommands = {
  label: "Mac自动化",
  icon: "laptop_mac",
  defaultOpened: false,
  commands: [
    {
      value: "quickcomposer.macos.app.getFrontmost",
      label: "应用及窗口控制",
      icon: "apps",
      isAsync: true,
      subCommands: [
        {
          value: "quickcomposer.macos.app.getFrontmost",
          label: "获取前台应用",
          icon: "front_hand",
        },
        {
          value: "quickcomposer.macos.app.getRunningApps",
          label: "获取活动应用",
          icon: "list",
        },
        {
          value: "quickcomposer.macos.app.launch",
          label: "启动应用",
          icon: "launch",
          config: [
            {
              label: "应用名称",
              component: "VariableInput",
              icon: "apps",
              width: 12,
              placeholder: "输入应用名称",
            },
          ],
        },
        {
          value: "quickcomposer.macos.app.quit",
          label: "退出应用",
          icon: "close",
          config: [
            {
              label: "应用名称",
              component: "VariableInput",
              icon: "apps",
              width: 12,
              placeholder: "输入应用名称",
            },
          ],
        },
        {
          value: "quickcomposer.macos.app.hide",
          label: "隐藏应用",
          icon: "visibility_off",
          config: [
            {
              label: "应用名称",
              component: "VariableInput",
              icon: "apps",
              width: 12,
              placeholder: "输入应用名称",
            },
          ],
        },
        {
          value: "quickcomposer.macos.app.show",
          label: "显示应用",
          icon: "visibility",
          config: [
            {
              label: "应用名称",
              component: "VariableInput",
              icon: "apps",
              width: 12,
              placeholder: "输入应用名称",
            },
          ],
        },
        {
          value: "quickcomposer.macos.app.minimize",
          label: "最小化窗口",
          icon: "minimize",
          config: [
            {
              label: "应用名称",
              component: "VariableInput",
              icon: "apps",
              width: 12,
              placeholder: "输入应用名称",
            },
          ],
        },
        {
          value: "quickcomposer.macos.app.maximize",
          label: "最大化窗口",
          icon: "maximize",
          config: [
            {
              label: "应用名称",
              component: "VariableInput",
              icon: "apps",
              width: 12,
              placeholder: "输入应用名称",
            },
          ],
        },
        {
          value: "quickcomposer.macos.app.getWindows",
          label: "获取窗口信息",
          icon: "window",
          config: [
            {
              label: "应用名称",
              component: "VariableInput",
              icon: "apps",
              width: 12,
              placeholder: "输入应用名称",
            },
          ],
        },
        {
          value: "quickcomposer.macos.app.getScriptDictionary",
          label: "获取应用脚本字典",
          icon: "code",
          config: [
            {
              label: "应用名称",
              component: "VariableInput",
              icon: "apps",
              width: 12,
              placeholder: "输入应用名称",
            },
          ],
        },
      ],
    },
    {
      value: "quickcomposer.macos.system.setVolume",
      label: "系统管理",
      icon: "settings",
      isAsync: true,
      subCommands: [
        {
          value: "quickcomposer.macos.system.setVolume",
          label: "系统音量",
          icon: "volume_up",
          config: [
            {
              label: "音量",
              component: "NumberInput",
              icon: "volume_up",
              min: 0,
              max: 100,
              step: 10,
              defaultValue: 50,
              width: 12,
            },
          ],
        },
        {
          value: "quickcomposer.macos.system.lockScreen",
          label: "锁定屏幕",
          icon: "lock",
        },
        {
          value: "quickcomposer.macos.system.sleep",
          label: "进入睡眠",
          icon: "bedtime",
        },
        {
          value: "quickcomposer.macos.system.setDockPosition",
          label: "设置Dock位置",
          icon: "dock",
          config: [
            {
              label: "位置",
              component: "ButtonGroup",
              defaultValue: "bottom",
              width: 12,
              options: [
                {
                  label: "底部",
                  value: "bottom",
                },
                {
                  label: "左侧",
                  value: "left",
                },
                {
                  label: "右侧",
                  value: "right",
                },
              ],
            },
          ],
        },
        {
          value: "quickcomposer.macos.system.setDockSize",
          label: "设置Dock大小",
          icon: "dock",
          config: [
            {
              label: "大小",
              component: "NumberInput",
              icon: "dock",
              min: 16,
              max: 128,
              defaultValue: 48,
              width: 12,
            },
          ],
        },
        {
          value: "quickcomposer.macos.system.toggleDockAutohide",
          label: "Dock自动隐藏",
          icon: "dock",
          config: [
            {
              label: "启用",
              component: "CheckButton",
              defaultValue: false,
              icon: "dock",
              width: 12,
            },
          ],
        },
        {
          value: "quickcomposer.macos.system.toggleMenuBarAutohide",
          label: "菜单栏自动隐藏",
          icon: "menu",
          config: [
            {
              label: "启用",
              component: "CheckButton",
              defaultValue: false,
              icon: "menu",
              width: 12,
            },
          ],
        },
        {
          value: "quickcomposer.macos.system.toggleDarkMode",
          label: "深色模式",
          icon: "dark_mode",
          config: [
            {
              label: "启用",
              component: "CheckButton",
              defaultValue: true,
              icon: "dark_mode",
              width: 12,
            },
          ],
        },
      ],
    },
    {
      value: "quickcomposer.macos.finder.getSelection",
      label: "访达管理",
      icon: "folder",
      isAsync: true,
      subCommands: [
        {
          value: "quickcomposer.macos.finder.getSelection",
          label: "获取选中项",
          icon: "select_all",
        },
        {
          value: "quickcomposer.macos.finder.getCurrentFolder",
          label: "获取打开的路径",
          icon: "folder_open",
        },
        {
          value: "quickcomposer.macos.finder.setShowHiddenFiles",
          label: "显示隐藏文件",
          icon: "visibility",
          config: [
            {
              label: "显示",
              component: "CheckButton",
              width: 12,
              defaultValue: false,
            },
          ],
        },
        {
          value: "quickcomposer.macos.finder.getWindows",
          label: "获取窗口列表",
          icon: "window",
        },
        {
          value: "quickcomposer.macos.finder.activateWindow",
          label: "激活窗口",
          icon: "open_in_new",
          config: [
            {
              label: "窗口索引",
              component: "NumberInput",
              icon: "window",
              min: 1,
              defaultValue: 1,
              width: 12,
            },
          ],
        },
      ],
    },
    {
      value: "quickcomposer.macos.browser.getUrl",
      label: "浏览器控制",
      icon: "web",
      isAsync: true,
      config: [
        {
          component: "ButtonGroup",
          defaultValue: "Microsoft Edge",
          options: [
            {
              label: "Edge 浏览器",
              value: "Microsoft Edge",
            },
            {
              label: "Chrome 浏览器",
              value: "Google Chrome",
            },
          ],
          width: 12,
        },
      ],
      subCommands: browserCommands.commands.find(
        (command) => command.label === "浏览器操作"
      ).subCommands.map((command) => ({
        ...command,
        value: command.value.replace("quickcomposer.browser.", "quickcomposer.macos.browser."),
      })),
    },
  ],
};
