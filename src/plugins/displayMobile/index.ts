/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "Display Mobile",
    description: "Make your status display mobile",
    authors: [Devs.Niko],
    patches: [
        {
            find: '.verbose("[IDENTIFY]")',
            replacement: [
                {
                    match: /(\w+)\.verbose\("\[IDENTIFY\]"\)/,
                    replace:
                        'l.browser="Discord Android";l.os="Android";$1.verbose("[IDENTIFY]")',
                },
            ],
        },
    ],
});
