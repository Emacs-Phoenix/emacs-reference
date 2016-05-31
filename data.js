export const Data = {
    type: "select-list",
    data: {
        Edit: {
            type: "data-list",
            data: [
                {
                    title: "Delete",
                    text: "C-h || <backward>"
                },
                {
                    title: "newline",
                    text: "C-m || <RET>"
                },
                {
                    title: "comment",
                    text: "C-;"
                }
            ]
        },
        Window: {
            type: "data-list",
            data: [
                {
                    title: "remove the current window from the display",
                    text: "C-x 0"
                },
                {
                    title: "make active window the only window",
                    text: "C-x 1"
                },
                {
                    title: "split window horizontally",
                    text: "C-x 2"
                },
                {
                    title: "split window vertically",
                    text: "C-x 3"
                },
                {
                    title: "move to other window",
                    text: "C-x 0"
                }
            ]
        },
        Move: {
            type: "data-list",
            data: [
                {
                    title: "forward-char",
                    text: "C-f"
                },
                {
                    title: "backward-char",
                    text: "C-b"
                },
                {
                    title: "previous-line",
                    text: "C-p"
                },
                {
                    title: "next-line",
                    text: "C-n"
                }
            ]
        },
        Search: {
            type: "data-list",
            data: [
                {
                    title: "isearch-forward",
                    text: "C-s"
                },
                {
                    title: "isearch-backward",
                    text: "C-r"
                }
            ]
        },
        Dired: {
            type: "data-list",
            data: [
                {
                    title: "run-dired",
                    text: "C-x d"
                },
                {
                    title: "dired the directory of the file you are editing",
                    text: "C-x C-j"
                },
                {
                    title: "mark a file or subdirectory for later commands",
                    text: "m"
                },
                {
                    title: "copy file(s) ",
                    text: "C"
                },
                {
                    title: "rename a file or move files to another directory",
                    text: "R"
                },
                {
                    title: "change ownership of file(s) ",
                    text: "O"
                },
                {
                    title: "change the group of the file(s)",
                    text: "G"
                },
                {
                    title: "change mode of file(s) ",
                    text: "R"
                },
                {
                    title: "print file(s) ",
                    text: "P"
                },
                {
                    title: "delete marked (as opposed to flagged) file(s) ",
                    text: "D"
                },
                {
                    title: "compress or uncompress file(s)",
                    text: "Z"
                },
                {
                    title: "make symbolic link(s)",
                    text: "S"
                },
                {
                    title: "make relative symbolic link(s) ",
                    text: "Y"
                },
                {
                    title: "make hard link(s) ",
                    text: "H"
                },
                {
                    title: "search files for a regular expression",
                    text: "A"
                },
                {
                    title: "regexp query replace on marked files ",
                    text: "Q"
                },
                {
                    title: "load file(s) ",
                    text: "L"
                },
                {
                    title: "shell command on file(s)",
                    text: "!"
                },
                {
                    title: "flag file for deletion",
                    text: "d"
                },
                {
                    title: "flag all backup files (file names ending in ˜) ",
                    text: "~"
                },
                {
                    title: "flag all auto-save files ",
                    text: "#"
                },
                {
                    title: "execute the deletions requested (flagged files)",
                    text: "x"
                },
                {
                    title: "mark filenames matching a regular expression",
                    text: "% m"
                },
                {
                    title: "copy marked files by regexp ",
                    text: "% C"
                },
                {
                    title: "rename marked files by regexp ",
                    text: "% R"
                }
            ]
        },
        plugins: {
            type: "select-list",
            data: {
                edit: {
                    type: "data-list",
                    data: [
                        {
                            title: "delete",
                            text: "C-h"
                        }
                    ]
                },
                Search: {
                    type: "data-list",
                    data: [
                        {
                            title: "delete",
                            text: "C-h"
                        }
                    ]
                }
            }
        }
    }
};
