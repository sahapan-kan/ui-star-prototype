/* =====================================================================
 * Shared kit for every prototype page: colours/config, helpers, icons,
 * top bar + left menu. Edit CONFIG to recolour all pages at once.
 * ===================================================================== */
const ICONS = {"menu-burger": ["M18.724 11.211C19.153 11.211 19.5 11.564 19.5 12C19.5 12.436 19.153 12.789 18.724 12.789L5.276 12.789C4.848 12.789 4.5 12.436 4.5 12C4.5 11.564 4.848 11.211 5.276 11.211L18.724 11.211Z", "M18.724 15.422C19.153 15.422 19.5 15.775 19.5 16.211C19.5 16.647 19.153 17 18.724 17L5.276 17C4.848 17 4.5 16.647 4.5 16.211C4.5 15.775 4.848 15.422 5.276 15.422L18.724 15.422Z", "M18.724 7C19.152 7 19.5 7.353 19.5 7.789C19.5 8.225 19.152 8.578 18.724 8.578L5.276 8.578C4.847 8.578 4.5 8.225 4.5 7.789C4.5 7.353 4.847 7 5.276 7L18.724 7Z"], "bell-notification": ["M13.541 18.88L13.541 18.505C13.541 18.081 13.877 17.736 14.291 17.736C14.706 17.736 15.041 18.081 15.041 18.505L15.041 18.88C15.041 20.603 13.68 22 12 22C10.32 22 8.958 20.603 8.958 18.881L8.958 18.506C8.958 18.082 9.293 17.737 9.708 17.737C10.122 17.737 10.458 18.082 10.458 18.506L10.458 18.881C10.458 19.753 11.148 20.462 12 20.462C12.851 20.462 13.541 19.754 13.541 18.88Z", "M13.082 5.591L13.082 4.649C13.082 4.036 12.598 3.538 12 3.538C11.401 3.538 10.917 4.036 10.917 4.649L10.917 5.591C10.917 6.016 10.581 6.36 10.167 6.36C9.752 6.36 9.417 6.016 9.417 5.591L9.417 4.649C9.417 3.214 10.53 2.047 11.921 2.005C11.947 2.002 11.973 2 12 2C13.427 2 14.582 3.187 14.582 4.649L14.582 5.591C14.582 6.016 14.247 6.36 13.832 6.36C13.418 6.36 13.082 6.016 13.082 5.591Z", "M16.688 10.142C16.688 8 14.995 6.264 12.907 6.264L11.093 6.264C9.006 6.264 7.313 8 7.313 10.142L7.313 13.01C7.313 13.758 7.023 14.476 6.508 15.004L5.866 15.661C5.632 15.902 5.5 16.229 5.5 16.568C5.5 17.214 6.01 17.737 6.639 17.737L17.361 17.737C17.99 17.737 18.5 17.214 18.5 16.568C18.5 16.229 18.368 15.902 18.134 15.661L17.493 15.004C16.978 14.476 16.688 13.758 16.688 13.01L16.688 10.142ZM18.188 13.01C18.188 13.35 18.319 13.676 18.554 13.917L19.194 14.574C19.71 15.102 20 15.82 20 16.568C20 18.063 18.818 19.275 17.361 19.275L6.639 19.275C5.182 19.275 4 18.063 4 16.568C4 15.82 4.29 15.102 4.806 14.574L5.446 13.917C5.681 13.676 5.813 13.35 5.813 13.01L5.813 10.142C5.813 7.15 8.178 4.725 11.093 4.725L12.907 4.725C15.824 4.725 18.188 7.151 18.188 10.142L18.188 13.01Z"], "arrows-down-arrow-hint": ["M16 7.211C16.28 7.492 16.28 7.948 16 8.229L12.174 12.069C11.894 12.35 11.44 12.35 11.159 12.069L7.333 8.229C7.053 7.948 7.053 7.492 7.333 7.211C7.613 6.93 8.068 6.93 8.348 7.211L11.667 10.542L14.986 7.211C15.266 6.93 15.72 6.93 16 7.211Z", "M17.08 11.244C17.36 11.526 17.36 11.981 17.08 12.263L12.297 17.063C12.017 17.344 11.563 17.344 11.283 17.063L6.5 12.263C6.22 11.981 6.22 11.526 6.5 11.244C6.78 10.963 7.234 10.963 7.514 11.244L11.79 15.535L16.065 11.244C16.345 10.963 16.8 10.963 17.08 11.244Z"], "home": ["M3.046 8.513C3.046 8.088 3.39 7.743 3.814 7.743C4.238 7.743 4.581 8.088 4.581 8.513L4.581 20.462L19.419 20.462L19.419 8.513C19.419 8.088 19.762 7.743 20.186 7.743C20.61 7.743 20.954 8.088 20.954 8.513L20.954 21.231C20.954 21.655 20.61 22 20.186 22L3.814 22C3.39 22 3.046 21.655 3.046 21.231L3.046 8.513Z", "M11.663 2.078C11.911 1.957 12.209 1.977 12.44 2.139L22.673 9.318C23.02 9.562 23.104 10.041 22.861 10.389C22.618 10.737 22.14 10.822 21.793 10.578L12 3.708L2.207 10.578C1.86 10.822 1.382 10.737 1.139 10.389C0.896 10.041 0.98 9.562 1.327 9.318L11.56 2.139L11.663 2.078Z", "M14.302 21.23L14.302 15.077C14.302 14.368 13.73 13.795 13.023 13.795L10.977 13.795C10.27 13.795 9.698 14.368 9.698 15.077L9.698 21.23C9.698 21.655 9.354 22 8.93 22C8.506 22 8.163 21.655 8.163 21.23L8.163 15.077C8.163 13.518 9.422 12.256 10.977 12.256L13.023 12.256C14.578 12.256 15.837 13.518 15.837 15.077L15.837 21.23C15.837 21.655 15.494 22 15.07 22C14.646 22 14.302 21.655 14.302 21.23Z"], "book-open": ["M18.069 12.382C18.491 12.335 18.871 12.64 18.918 13.063C18.965 13.486 18.661 13.868 18.239 13.916C17.203 14.032 16.247 14.231 15.319 14.539C14.916 14.674 14.481 14.454 14.347 14.05C14.213 13.646 14.431 13.209 14.835 13.075C15.878 12.728 16.942 12.508 18.069 12.382Z", "M5.931 12.383C7.059 12.508 8.122 12.729 9.165 13.076C9.569 13.21 9.787 13.647 9.653 14.051C9.519 14.455 9.084 14.675 8.681 14.54C7.753 14.232 6.796 14.032 5.761 13.917C5.339 13.87 5.035 13.488 5.082 13.065C5.129 12.641 5.509 12.336 5.931 12.383Z", "M18.069 8.269C18.491 8.222 18.871 8.527 18.918 8.951C18.965 9.374 18.661 9.755 18.239 9.802C17.204 9.918 16.247 10.117 15.319 10.426C14.916 10.56 14.481 10.341 14.347 9.937C14.213 9.533 14.431 9.096 14.835 8.962C15.878 8.614 16.941 8.394 18.069 8.269Z", "M5.931 8.268C7.058 8.394 8.122 8.613 9.165 8.961C9.569 9.095 9.787 9.532 9.653 9.936C9.519 10.34 9.084 10.559 8.681 10.425C7.753 10.116 6.797 9.918 5.761 9.801C5.339 9.754 5.035 9.372 5.082 8.949C5.129 8.525 5.509 8.22 5.931 8.268Z", "M20.462 16.991L20.462 4.8C20.462 4.645 20.335 4.538 20.212 4.542C17.17 4.641 14.916 5.209 12.376 6.636C12.142 6.767 11.858 6.767 11.624 6.636C9.084 5.209 6.83 4.641 3.788 4.543L3.786 4.543C3.665 4.539 3.538 4.645 3.538 4.801L3.538 16.992C3.538 17.137 3.655 17.246 3.78 17.248C6.913 17.294 9.351 17.856 12 19.34C14.649 17.856 17.087 17.294 20.22 17.248C20.345 17.246 20.462 17.137 20.462 16.991ZM22 16.991C22 17.9 21.322 18.673 20.425 18.778L20.243 18.79C17.187 18.836 14.933 19.394 12.39 20.894C12.149 21.035 11.851 21.035 11.61 20.894C9.226 19.488 7.096 18.909 4.321 18.804L3.757 18.79C2.772 18.776 2 17.961 2 16.992L2 4.801C2 3.808 2.813 2.968 3.836 3.002L3.837 3.001L3.839 3.001L3.838 3.002C6.948 3.103 9.367 3.674 12 5.085C14.633 3.674 17.053 3.102 20.163 3L20.352 3.004C21.284 3.073 22 3.867 22 4.8L22 16.991Z", "M11.231 20.228L11.231 5.962C11.231 5.536 11.575 5.19 12 5.19C12.425 5.19 12.769 5.536 12.769 5.962L12.769 20.228C12.769 20.654 12.425 21 12 21C11.575 21 11.231 20.654 11.231 20.228Z"], "school-blackboard-chalk": ["M21.465 19.179C21.465 19.038 21.351 18.923 21.209 18.923L2.791 18.923C2.649 18.923 2.535 19.038 2.535 19.179L2.535 20.205C2.535 20.347 2.649 20.462 2.791 20.462L21.209 20.462C21.351 20.462 21.465 20.347 21.465 20.205L21.465 19.179ZM23 20.205C23 21.196 22.198 22 21.209 22L2.791 22C1.802 22 1 21.196 1 20.205L1 19.179C1 18.188 1.802 17.385 2.791 17.385L21.209 17.385C22.198 17.385 23 18.188 23 19.179L23 20.205Z", "M20.442 18.154L20.442 4.821C20.442 4.112 19.869 3.538 19.163 3.538L4.837 3.538C4.131 3.538 3.558 4.112 3.558 4.821L3.558 18.154C3.558 18.579 3.215 18.923 2.791 18.923C2.367 18.923 2.023 18.579 2.023 18.154L2.023 4.821C2.023 3.263 3.283 2 4.837 2L19.163 2C20.717 2 21.977 3.263 21.977 4.821L21.977 18.154C21.977 18.579 21.633 18.923 21.209 18.923C20.785 18.923 20.442 18.579 20.442 18.154Z", "M16.349 16.103C16.349 15.961 16.234 15.846 16.093 15.846L12 15.846C11.859 15.846 11.744 15.961 11.744 16.103L11.744 17.128C11.744 17.27 11.859 17.385 12 17.385L16.093 17.385C16.234 17.385 16.349 17.27 16.349 17.128L16.349 16.103ZM17.884 17.128C17.884 18.119 17.082 18.923 16.093 18.923L12 18.923C11.011 18.923 10.209 18.119 10.209 17.128L10.209 16.103C10.209 15.111 11.011 14.308 12 14.308L16.093 14.308C17.082 14.308 17.884 15.111 17.884 16.103L17.884 17.128Z"], "document-pencil-right-top": ["M15.585 15.333C16.01 15.333 16.354 15.678 16.354 16.103C16.354 16.527 16.01 16.872 15.585 16.872L6.366 16.872C5.942 16.872 5.598 16.527 5.598 16.103C5.598 15.678 5.942 15.333 6.366 15.333L15.585 15.333Z", "M17.842 3.189C18.742 2.288 20.201 2.288 21.101 3.189L21.825 3.914L21.983 4.089C22.672 4.935 22.672 6.156 21.983 7.002L21.825 7.177L16.948 12.06C16.439 12.57 15.778 12.902 15.064 13.004L13.206 13.269C12.807 13.326 12.404 13.192 12.119 12.906C11.834 12.621 11.7 12.218 11.757 11.819L12.022 9.957C12.124 9.243 12.455 8.582 12.965 8.072L17.842 3.189ZM20.014 4.277C19.714 3.976 19.228 3.976 18.928 4.277L14.051 9.159C13.777 9.434 13.599 9.791 13.544 10.175L13.326 11.696L14.847 11.48C15.231 11.425 15.587 11.247 15.862 10.972L20.739 6.09C21.039 5.789 21.039 5.302 20.739 5.002L20.014 4.277Z", "M16.456 4.575C16.756 4.275 17.243 4.275 17.543 4.575L20.44 7.476C20.74 7.776 20.74 8.263 20.44 8.564C20.14 8.864 19.653 8.864 19.353 8.564L16.456 5.663C16.156 5.363 16.156 4.876 16.456 4.575Z", "M1.5 19.179L1.5 4.821C1.5 3.263 2.761 2 4.317 2L13.537 2C13.961 2 14.305 2.344 14.305 2.769C14.305 3.194 13.961 3.538 13.537 3.538L4.317 3.538C3.61 3.538 3.037 4.112 3.037 4.821L3.037 19.179C3.037 19.888 3.61 20.462 4.317 20.462L17.634 20.462C18.341 20.462 18.915 19.888 18.915 19.179L18.915 13.026C18.915 12.601 19.259 12.256 19.683 12.256C20.107 12.256 20.451 12.601 20.451 13.026L20.451 19.179C20.451 20.737 19.19 22 17.634 22L4.317 22C2.761 22 1.5 20.737 1.5 19.179Z", "M8.415 8.154C8.839 8.154 9.183 8.498 9.183 8.923C9.183 9.348 8.839 9.692 8.415 9.692L6.366 9.692C5.942 9.692 5.598 9.348 5.598 8.923C5.598 8.498 5.942 8.154 6.366 8.154L8.415 8.154Z", "M8.415 11.744C8.839 11.744 9.183 12.088 9.183 12.513C9.183 12.938 8.839 13.282 8.415 13.282L6.366 13.282C5.942 13.282 5.598 12.938 5.598 12.513C5.598 12.088 5.942 11.744 6.366 11.744L8.415 11.744Z"], "light-bulb-idea": ["M13.907 13.108C14.332 13.108 14.677 13.452 14.677 13.877C14.677 14.302 14.332 14.646 13.907 14.646L10.092 14.646C9.668 14.646 9.323 14.302 9.323 13.877C9.323 13.452 9.668 13.108 10.092 13.108L13.907 13.108Z", "M14.85 10.748C14.85 9.061 13.384 7.714 11.652 7.917L11.651 7.918C10.488 8.054 9.506 8.935 9.23 10.058L9.185 10.285C9.018 11.366 9.451 12.346 10.203 12.956L10.357 13.074L10.359 13.075C10.694 13.313 10.959 13.715 10.958 14.209L10.958 15.876C10.958 16.285 11.29 16.615 11.698 16.615L12.301 16.615C12.709 16.615 13.04 16.284 13.04 15.876L13.04 14.206C13.04 13.713 13.306 13.313 13.64 13.076L13.641 13.075C14.374 12.556 14.85 11.708 14.85 10.748ZM16.388 10.748C16.388 12.209 15.671 13.498 14.578 14.294L14.578 15.876C14.578 17.133 13.56 18.153 12.301 18.154L11.698 18.154C10.441 18.154 9.419 17.135 9.419 15.876L9.419 14.292C8.152 13.369 7.396 11.785 7.665 10.05C7.963 8.133 9.55 6.615 11.473 6.39L11.72 6.368C14.269 6.208 16.388 8.231 16.388 10.748Z", "M4.929 4.929C8.834 1.024 15.166 1.024 19.071 4.929L19.426 5.302C22.972 9.228 22.854 15.288 19.071 19.071C15.166 22.976 8.834 22.976 4.929 19.071C1.024 15.166 1.024 8.834 4.929 4.929ZM17.667 5.717C14.346 2.716 9.218 2.816 6.017 6.017C2.712 9.321 2.712 14.679 6.017 17.983C9.321 21.288 14.679 21.288 17.984 17.983C21.185 14.782 21.284 9.655 18.283 6.333L17.984 6.017L17.667 5.717Z"], "calendar-big-square": ["M6.841 12.477C7.141 12.176 7.628 12.176 7.928 12.477C7.93 12.478 7.932 12.48 7.933 12.482C8.234 12.782 8.234 13.269 7.933 13.57L7.928 13.575C7.628 13.875 7.141 13.875 6.841 13.575L6.836 13.57C6.535 13.269 6.535 12.782 6.836 12.482L6.841 12.477Z", "M9.918 12.477C10.218 12.176 10.705 12.176 11.005 12.477C11.007 12.478 11.009 12.48 11.01 12.482C11.311 12.782 11.311 13.269 11.01 13.57L11.005 13.575C10.705 13.875 10.218 13.875 9.918 13.575L9.913 13.57C9.612 13.269 9.612 12.782 9.913 12.482L9.918 12.477Z", "M12.995 12.477C13.295 12.176 13.782 12.176 14.082 12.477C14.084 12.478 14.086 12.48 14.087 12.482C14.388 12.782 14.388 13.269 14.087 13.57L14.082 13.575C13.782 13.875 13.295 13.875 12.995 13.575L12.99 13.57C12.689 13.269 12.689 12.782 12.99 12.482L12.995 12.477Z", "M16.072 12.477C16.372 12.176 16.859 12.176 17.159 12.477C17.161 12.478 17.163 12.48 17.164 12.482C17.465 12.782 17.465 13.269 17.164 13.57L17.159 13.575C16.859 13.875 16.372 13.875 16.072 13.575L16.067 13.57C15.766 13.269 15.766 12.782 16.067 12.482L16.072 12.477Z", "M6.841 15.554C7.141 15.253 7.628 15.253 7.928 15.554C7.93 15.555 7.932 15.557 7.933 15.559C8.234 15.859 8.234 16.346 7.933 16.646L7.928 16.651C7.628 16.952 7.141 16.952 6.841 16.651L6.836 16.646C6.535 16.346 6.535 15.859 6.836 15.559L6.841 15.554Z", "M9.918 15.554C10.218 15.253 10.705 15.253 11.005 15.554C11.007 15.555 11.009 15.557 11.01 15.559C11.311 15.859 11.311 16.346 11.01 16.646L11.005 16.651C10.705 16.952 10.218 16.952 9.918 16.651L9.913 16.646C9.612 16.346 9.612 15.859 9.913 15.559L9.918 15.554Z", "M12.995 15.554C13.295 15.253 13.782 15.253 14.082 15.554C14.084 15.555 14.086 15.557 14.087 15.559C14.388 15.859 14.388 16.346 14.087 16.646L14.082 16.651C13.782 16.952 13.295 16.952 12.995 16.651L12.99 16.646C12.689 16.346 12.689 15.859 12.99 15.559L12.995 15.554Z", "M20.462 7.897C20.462 5.49 18.51 3.538 16.103 3.538L7.897 3.538C5.49 3.538 3.538 5.49 3.538 7.897L3.538 16.103C3.538 18.51 5.49 20.462 7.897 20.462L16.103 20.462C18.51 20.462 20.462 18.51 20.462 16.103L20.462 7.897ZM22 16.103C22 19.36 19.36 22 16.103 22L7.897 22C4.64 22 2 19.36 2 16.103L2 7.897C2 4.64 4.64 2 7.897 2L16.103 2C19.36 2 22 4.64 22 7.897L22 16.103Z", "M21.231 8.154C21.656 8.154 22 8.498 22 8.923C22 9.348 21.656 9.692 21.231 9.692L2.769 9.692C2.344 9.692 2 9.348 2 8.923C2 8.498 2.344 8.154 2.769 8.154L21.231 8.154Z"], "clock-time-timer-fast": ["M5.132 7.198C8.641 3.698 14.332 3.698 17.841 7.198L18.16 7.532C21.348 11.051 21.241 16.484 17.841 19.875C14.332 23.375 8.641 23.375 5.132 19.875C1.623 16.375 1.623 10.698 5.132 7.198ZM16.474 8.021C13.552 5.387 9.038 5.475 6.221 8.285C3.314 11.185 3.314 15.888 6.221 18.788C9.129 21.689 13.845 21.689 16.752 18.788C19.569 15.979 19.657 11.477 17.016 8.562L16.752 8.285L16.474 8.021Z", "M11.615 12.262C12.238 12.323 12.728 12.829 12.765 13.458C12.768 13.485 12.771 13.512 12.771 13.538C12.768 14.243 12.196 14.817 11.486 14.817C10.777 14.817 10.203 14.245 10.203 13.537C10.203 12.83 10.778 12.259 11.484 12.256L11.615 12.262Z", "M10.716 13.536L10.716 9.439C10.716 9.015 11.061 8.671 11.487 8.671C11.912 8.671 12.257 9.015 12.257 9.439L12.257 13.536C12.257 13.961 11.912 14.305 11.487 14.305C11.061 14.305 10.716 13.961 10.716 13.536Z", "M13.541 1.5C13.966 1.5 14.311 1.844 14.311 2.268C14.311 2.693 13.966 3.037 13.541 3.037L9.433 3.037C9.007 3.037 8.662 2.693 8.662 2.268C8.662 1.844 9.007 1.5 9.433 1.5L13.541 1.5Z", "M18.131 3.774C18.432 3.474 18.92 3.474 19.22 3.774L21.274 5.823C21.575 6.123 21.575 6.609 21.274 6.909C20.974 7.209 20.486 7.209 20.185 6.909L19.703 6.428L17.841 8.285C17.54 8.585 17.053 8.585 16.752 8.285C16.452 7.984 16.451 7.498 16.752 7.198L18.614 5.341L18.131 4.86C17.83 4.56 17.83 4.074 18.131 3.774Z"], "done-check": ["M19.256 6.211C19.541 5.93 20.002 5.93 20.287 6.211C20.571 6.492 20.571 6.948 20.287 7.229L9.601 17.789C9.316 18.07 8.855 18.07 8.571 17.789L3.713 12.989C3.429 12.708 3.429 12.252 3.713 11.971C3.998 11.69 4.459 11.69 4.744 11.971L9.086 16.262L19.256 6.211Z"], "alarm-clock-time-timer": ["M8.174 2.764C13.275 0.65 19.123 3.074 21.236 8.175C23.35 13.276 20.926 19.123 15.825 21.236C10.724 23.349 4.877 20.927 2.763 15.826C0.651 10.725 3.073 4.877 8.174 2.764ZM19.815 8.764C18.027 4.448 13.079 2.397 8.763 4.185C4.447 5.973 2.397 10.921 4.185 15.237C5.973 19.553 10.921 21.603 15.237 19.815C19.553 18.027 21.603 13.08 19.815 8.764Z", "M10.941 7.883C10.941 7.458 11.286 7.113 11.711 7.113C12.135 7.113 12.48 7.458 12.48 7.883L12.48 12.22L15.861 14.282C16.224 14.503 16.338 14.976 16.116 15.339C15.895 15.702 15.422 15.817 15.06 15.596L11.31 13.309C11.081 13.169 10.941 12.921 10.941 12.653L10.941 7.883Z"], "checkmark-done-check-circle": ["M20.462 12C20.462 7.327 16.673 3.538 12 3.538C7.327 3.538 3.538 7.327 3.538 12C3.538 16.673 7.327 20.462 12 20.462C16.673 20.462 20.462 16.673 20.462 12ZM22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z", "M16.103 15.333C16.527 15.333 16.872 15.678 16.872 16.103C16.872 16.527 16.527 16.872 16.103 16.872L7.897 16.872C7.473 16.872 7.128 16.527 7.128 16.103C7.128 15.678 7.473 15.333 7.897 15.333L16.103 15.333Z", "M15.046 7.583C15.346 7.283 15.833 7.283 16.134 7.583C16.434 7.884 16.434 8.371 16.134 8.671L11.645 13.159C11.501 13.303 11.306 13.385 11.102 13.385C10.898 13.385 10.702 13.303 10.558 13.159L7.866 10.466C7.566 10.165 7.566 9.678 7.866 9.378C8.167 9.078 8.654 9.078 8.954 9.378L11.102 11.527L15.046 7.583Z"]};
const AF_ICONS = {"icon-dots-horizontal": {"vb": "0 0 24 24", "d": ["M19.035 10.500C19.844 10.500 20.500 11.172 20.500 12C20.500 12.829 19.844 13.500 19.035 13.500C18.226 13.500 17.570 12.828 17.570 12C17.570 11.172 18.226 10.500 19.035 10.500Z", "M12 10.500C12.809 10.500 13.465 11.172 13.465 12C13.465 12.829 12.809 13.500 12 13.500C11.191 13.500 10.535 12.828 10.535 12C10.535 11.172 11.191 10.500 12 10.500Z", "M4.965 10.500C5.774 10.500 6.430 11.172 6.430 12C6.430 12.829 5.774 13.500 4.965 13.500C4.156 13.500 3.500 12.828 3.500 12C3.500 11.172 4.156 10.500 4.965 10.500Z"], "eo": [false, false, false]}, "icon-chevrons-right": {"vb": "0 0 24 24", "d": ["M9.203 6.710C9.473 6.430 9.911 6.430 10.182 6.710L14.797 11.493C15.068 11.773 15.068 12.227 14.797 12.507L10.182 17.290C9.911 17.570 9.473 17.570 9.203 17.290C8.932 17.010 8.932 16.556 9.203 16.275L13.329 12L9.203 7.725C8.932 7.444 8.932 6.990 9.203 6.710Z"], "eo": [false]}};
/* =====================================================================
 * PROTOTYPE app logic (vanilla JS, no framework, no build step).
 * All wording comes from copy.js (window.COPY). Look & feel = designer's
 * "UI STAR" home page.   Tweak colours / sizes in CONFIG just below.
 * ===================================================================== */
const CONFIG = {
  primary: '#004DB2',      // main brand colour (banner, headings)
  secondary: '#F99D33',    // accent colour (orange)
  coinColor: '#F99D33',    // Starcoin colour
  contentMaxWidth: 1240,   // page content width (px) on a 1440px-wide window and narrower = the designer's layout
  contentGrow: 0.95,       // on screens wider than 1440px the content gets this share of the extra width (0 = stay 1240, 1 = fill the screen)
  contentCap: 2000,        // ...but never wider than this (px)
  loaderMs: 800,           // rocket + stars loader: how long it plays when a page opens / changes (0 = no loader)
  loaderMinMs: 450,        // ...and never shorter than this, so the stars always get to fill
  startCoins: 128,         // Starcoin balance shown in the top bar when a page opens
  reduceMotion: false      // true = turn all animation off
};

const T = window.COPY;
const COVERS = {"math": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20320%20174%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22320%22%20height%3D%22174%22%20fill%3D%22%23DCEBFF%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20opacity%3D%22.55%22%3E%3Cpath%20d%3D%22M262%2022l16%209v18l-16%209-16-9V31z%22/%3E%3Cpath%20d%3D%22M40%20120l12%207v14l-12%207-12-7v-14z%22/%3E%3Ccircle%20cx%3D%22292%22%20cy%3D%22130%22%20r%3D%226%22/%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%2240%22%20r%3D%224%22/%3E%3C/g%3E%3Cg%20stroke%3D%22%2322324F%22%20stroke-width%3D%223%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M108%20138L160%2046l52%2092z%22%20fill%3D%22%23FFD36B%22/%3E%3Cpath%20d%3D%22M160%2076l-26%2046h52z%22%20fill%3D%22%23FFF3D1%22/%3E%3Crect%20x%3D%2296%22%20y%3D%22134%22%20width%3D%22128%22%20height%3D%2218%22%20rx%3D%224%22%20fill%3D%22%237FB2FF%22/%3E%3Cpath%20d%3D%22M112%20134v8M128%20134v6M144%20134v8M160%20134v6M176%20134v8M192%20134v6M208%20134v8%22/%3E%3Ccircle%20cx%3D%22228%22%20cy%3D%2268%22%20r%3D%2220%22%20fill%3D%22%23FF8FA3%22/%3E%3Cpath%20d%3D%22M220%2068h16M228%2060v16%22/%3E%3Crect%20x%3D%2278%22%20y%3D%2252%22%20width%3D%2234%22%20height%3D%2234%22%20rx%3D%228%22%20fill%3D%22%23FFFFFF%22/%3E%3Cpath%20d%3D%22M88%2069h14%22/%3E%3Ccircle%20cx%3D%2295%22%20cy%3D%2262%22%20r%3D%221.5%22%20fill%3D%22%2322324F%22/%3E%3Ccircle%20cx%3D%2295%22%20cy%3D%2276%22%20r%3D%221.5%22%20fill%3D%22%2322324F%22/%3E%3C/g%3E%3C/svg%3E", "thai": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20320%20174%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22320%22%20height%3D%22174%22%20fill%3D%22%23FFE6CF%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20opacity%3D%22.55%22%3E%3Cpath%20d%3D%22M262%2022l16%209v18l-16%209-16-9V31z%22/%3E%3Cpath%20d%3D%22M40%20120l12%207v14l-12%207-12-7v-14z%22/%3E%3Ccircle%20cx%3D%22292%22%20cy%3D%22130%22%20r%3D%226%22/%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%2240%22%20r%3D%224%22/%3E%3C/g%3E%3Cg%20stroke%3D%22%2322324F%22%20stroke-width%3D%223%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M160%2058c-20-12-44-12-64-6v86c20-6%2044-6%2064%206z%22%20fill%3D%22%23FFFFFF%22/%3E%3Cpath%20d%3D%22M160%2058c20-12%2044-12%2064-6v86c-20-6-44-6-64%206z%22%20fill%3D%22%23FFFFFF%22/%3E%3Cpath%20d%3D%22M160%2058v86%22/%3E%3Cpath%20d%3D%22M108%2076c12-3%2026-3%2040%201M108%2092c12-3%2026-3%2040%201M108%20108c12-3%2026-3%2040%201M172%2077c14-4%2028-4%2040-1M172%2093c14-4%2028-4%2040-1M172%20109c14-4%2028-4%2040-1%22%20stroke-width%3D%222.5%22%20opacity%3D%22.5%22/%3E%3Crect%20x%3D%22214%22%20y%3D%2230%22%20width%3D%2256%22%20height%3D%2246%22%20rx%3D%2214%22%20fill%3D%22%23FF9B57%22/%3E%3Cpath%20d%3D%22M228%2076l-6%2012%2016-12%22/%3E%3C/g%3E%3Ctext%20x%3D%22242%22%20y%3D%2263%22%20text-anchor%3D%22middle%22%20font-family%3D%22Sarabun%2C%20sans-serif%22%20font-size%3D%2226%22%20font-weight%3D%22700%22%20fill%3D%22%23FFFFFF%22%3E%E0%B8%81%3C/text%3E%3C/svg%3E", "sci": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20320%20174%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22320%22%20height%3D%22174%22%20fill%3D%22%23DDF3C9%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20opacity%3D%22.55%22%3E%3Cpath%20d%3D%22M262%2022l16%209v18l-16%209-16-9V31z%22/%3E%3Cpath%20d%3D%22M40%20120l12%207v14l-12%207-12-7v-14z%22/%3E%3Ccircle%20cx%3D%22292%22%20cy%3D%22130%22%20r%3D%226%22/%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%2240%22%20r%3D%224%22/%3E%3C/g%3E%3Cg%20stroke%3D%22%2322324F%22%20stroke-width%3D%223%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M90%20144h140%22/%3E%3Cpath%20d%3D%22M104%20144V44M104%2060h24%22/%3E%3Crect%20x%3D%22124%22%20y%3D%2256%22%20width%3D%2216%22%20height%3D%2270%22%20rx%3D%228%22%20fill%3D%22%23FFFFFF%22/%3E%3Cpath%20d%3D%22M124%2096h16v22a8%208%200%200%201-16%200z%22%20fill%3D%22%23FFB547%22/%3E%3Cpath%20d%3D%22M170%2060h20v26l24%2044a8%208%200%200%201-7%2012h-54a8%208%200%200%201-7-12l24-44z%22%20fill%3D%22%23FFFFFF%22/%3E%3Cpath%20d%3D%22M161%20112h38l10%2018a8%208%200%200%201-7%2012h-44a8%208%200%200%201-7-12z%22%20fill%3D%22%23FF8FB1%22/%3E%3Cpath%20d%3D%22M226%2096h12v14l14%2022a6%206%200%200%201-5%209h-30a6%206%200%200%201-5-9l14-22z%22%20fill%3D%22%239C8CFF%22/%3E%3Ccircle%20cx%3D%22232%22%20cy%3D%2272%22%20r%3D%225%22%20fill%3D%22%23FFFFFF%22/%3E%3Ccircle%20cx%3D%22244%22%20cy%3D%2260%22%20r%3D%227%22%20fill%3D%22%23FFFFFF%22/%3E%3C/g%3E%3C/svg%3E", "eng": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20320%20174%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22320%22%20height%3D%22174%22%20fill%3D%22%23EADFFF%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20opacity%3D%22.55%22%3E%3Cpath%20d%3D%22M262%2022l16%209v18l-16%209-16-9V31z%22/%3E%3Cpath%20d%3D%22M40%20120l12%207v14l-12%207-12-7v-14z%22/%3E%3Ccircle%20cx%3D%22292%22%20cy%3D%22130%22%20r%3D%226%22/%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%2240%22%20r%3D%224%22/%3E%3C/g%3E%3Cg%20stroke%3D%22%2322324F%22%20stroke-width%3D%223%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Crect%20x%3D%2278%22%20y%3D%2244%22%20width%3D%22104%22%20height%3D%2262%22%20rx%3D%2218%22%20fill%3D%22%23FFFFFF%22/%3E%3Cpath%20d%3D%22M104%20106l-8%2018%2022-18%22/%3E%3Crect%20x%3D%22150%22%20y%3D%2284%22%20width%3D%2296%22%20height%3D%2254%22%20rx%3D%2218%22%20fill%3D%22%237FB2FF%22/%3E%3Cpath%20d%3D%22M222%20138l8%2016-20-16%22/%3E%3C/g%3E%3Ctext%20x%3D%22130%22%20y%3D%2284%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22700%22%20fill%3D%22%2322324F%22%3EHello%21%3C/text%3E%3Ctext%20x%3D%22198%22%20y%3D%22119%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22700%22%20fill%3D%22%23FFFFFF%22%3EHi%20%3A%29%3C/text%3E%3C/svg%3E", "soc": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20320%20174%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22320%22%20height%3D%22174%22%20fill%3D%22%23FFF1BF%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20opacity%3D%22.55%22%3E%3Cpath%20d%3D%22M262%2022l16%209v18l-16%209-16-9V31z%22/%3E%3Cpath%20d%3D%22M40%20120l12%207v14l-12%207-12-7v-14z%22/%3E%3Ccircle%20cx%3D%22292%22%20cy%3D%22130%22%20r%3D%226%22/%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%2240%22%20r%3D%224%22/%3E%3C/g%3E%3Cg%20stroke%3D%22%2322324F%22%20stroke-width%3D%223%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Ccircle%20cx%3D%22160%22%20cy%3D%2288%22%20r%3D%2248%22%20fill%3D%22%237FC8FF%22/%3E%3Cpath%20d%3D%22M128%2066c10%204%2014%2012%2010%2020s4%2014%2012%2014%208%2010%204%2018M176%2046c-4%2010%204%2016%2012%2014s12%208%208%2016-6%2014%202%2020%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M132%2062c8-2%2016%204%2014%2012-2%208-12%206-14%2014-1%206%206%2010%204%2016-8-6-14-18-12-28%201-6%204-12%208-14z%22%20fill%3D%22%238FD694%22/%3E%3Cpath%20d%3D%22M178%2060c8%200%2014%208%2012%2016-2%206-8%206-8%2014%200%206%206%2010%202%2016-6-2-12-10-12-20%200-10%200-26%206-26z%22%20fill%3D%22%238FD694%22/%3E%3Cpath%20d%3D%22M112%20140h96%22%20/%3E%3Cpath%20d%3D%22M160%20136v-0%22%20/%3E%3C/g%3E%3C/svg%3E", "hist": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20320%20174%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22320%22%20height%3D%22174%22%20fill%3D%22%23FFDCDE%22/%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20opacity%3D%22.55%22%3E%3Cpath%20d%3D%22M262%2022l16%209v18l-16%209-16-9V31z%22/%3E%3Cpath%20d%3D%22M40%20120l12%207v14l-12%207-12-7v-14z%22/%3E%3Ccircle%20cx%3D%22292%22%20cy%3D%22130%22%20r%3D%226%22/%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%2240%22%20r%3D%224%22/%3E%3C/g%3E%3Cg%20stroke%3D%22%2322324F%22%20stroke-width%3D%223%22%20stroke-linejoin%3D%22round%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M160%2030l8%2022h-16z%22%20fill%3D%22%23FFD36B%22/%3E%3Cpath%20d%3D%22M146%2052h28l6%2022h-40z%22%20fill%3D%22%23FFD36B%22/%3E%3Cpath%20d%3D%22M134%2074h52l8%2026h-68z%22%20fill%3D%22%23FFE7A3%22/%3E%3Crect%20x%3D%22118%22%20y%3D%22100%22%20width%3D%2284%22%20height%3D%2244%22%20fill%3D%22%23FFFFFF%22/%3E%3Cpath%20d%3D%22M140%20144v-24a20%2020%200%200%201%2040%200v24%22%20fill%3D%22%23FF9B9B%22/%3E%3Cpath%20d%3D%22M100%20144h120%22/%3E%3Cpath%20d%3D%22M226%20128c8-12%2022-12%2030%200M64%20128c8-12%2022-12%2030%200%22%20opacity%3D%22.7%22/%3E%3C/g%3E%3C/svg%3E"};   // course cover pictures (home + courses)
const TAG_COLOR = { math: '#1976D2', thai: '#C25E00', sci: '#4E8F1F', eng: '#6B4FCF', soc: '#8A6A00', hist: '#C2334A' };

const contentMax = () => `clamp(${CONFIG.contentMaxWidth}px, calc(${CONFIG.contentMaxWidth}px + (100vw - 1440px) * ${CONFIG.contentGrow}), ${CONFIG.contentCap}px)`;
const reward = () => Number(T.coinReward) || 1;   // Starcoin shown in the coin chip's floating "+n" (copy.js -> coinReward)
const f = (s, v) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in v ? v[k] : m));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const $ = (s, el) => (el || document).querySelector(s);

/* ---------- colour helpers (from the designer's logic) ---------- */
const rgb = (h) => { h = String(h || '').replace('#', ''); if (h.length === 3) h = h.split('').map((c) => c + c).join(''); const n = parseInt(h.slice(0, 6), 16); return isNaN(n) ? [0, 0, 0] : [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const hex = (c) => '#' + c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('').toUpperCase();
const mix = (a, b, t) => { const x = rgb(a), y = rgb(b); return hex(x.map((v, i) => v + (y[i] - v) * t)); };
const lum = (h) => rgb(h).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
const cr = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
const ink = (bg) => (cr('#FFFFFF', bg) >= cr('#000919', bg) ? '#FFFFFF' : '#000919');
const darkUntil = (c, bg, min) => { let t = 0.3, out = mix(c, '#000000', t); while (cr(out, bg) < min && t < 0.95) { t += 0.05; out = mix(c, '#000000', t); } return out; };

function buildTheme() {
  const M = mix, P = CONFIG.primary, S = CONFIG.secondary, K = CONFIG.coinColor;
  const pMuted = M(P, '#FFFFFF', 0.9), sMuted = M(S, '#FFFFFF', 0.88);
  const pOn = ink(P), sOn = ink(S);
  const pOnMuted = darkUntil(P, pMuted, 7), sOnMuted = darkUntil(S, sMuted, 4.5);
  const accent = cr(P, '#FFFFFF') >= 4.5 ? P : darkUntil(P, '#FFFFFF', 4.5);
  const v = {
    'primary-default': P, 'primary-hover': M(P, '#000000', 0.12), 'primary-pressed': M(P, '#000000', 0.24), 'primary-selected': M(P, '#000000', 0.24),
    'primary-outline': P, 'primary-logo': P, 'primary-onDefault': pOn, 'primary-onHover': pOn, 'primary-onPressed': pOn, 'primary-onSelected': pOn,
    'primary-mutedDefault': pMuted, 'primary-mutedHover': pMuted, 'primary-mutedSelected': M(P, '#FFFFFF', 0.8), 'primary-mutedPressed': M(P, '#FFFFFF', 0.68),
    'primary-onMutedDefault': pOnMuted, 'primary-onMutedHover': pOnMuted, 'primary-onMutedSelected': pOnMuted, 'primary-onMutedPressed': pOnMuted,
    'secondary-default': S, 'secondary-hover': M(S, '#FFFFFF', 0.18), 'secondary-pressed': M(S, '#000000', 0.08), 'secondary-selected': S, 'secondary-outline': sOnMuted,
    'secondary-onDefault': sOn, 'secondary-onHover': sOn, 'secondary-onPressed': sOn, 'secondary-onSelected': sOn,
    'secondary-mutedDefault': sMuted, 'secondary-mutedHover': sMuted, 'secondary-mutedSelected': M(S, '#FFFFFF', 0.65), 'secondary-mutedPressed': M(S, '#FFFFFF', 0.65),
    'secondary-onMutedDefault': sOnMuted, 'secondary-onMutedHover': sOnMuted, 'secondary-onMutedSelected': sOnMuted, 'secondary-onMutedPressed': sOnMuted,
    'text-accent': accent, 'icon-accent': accent, 'bg-util-orangeDefault': S, 'focus-ring': '0 0 0 2px #FFFFFF, 0 0 0 4px ' + accent
  };
  return {
    vars: Object.keys(v).map((k) => '--' + k + ': ' + v[k] + ';').join(' '),
    C: { face: K, faceHi: M(K, '#FFFFFF', 0.3), faceLo: M(K, '#000000', 0.07), rimHi: M(K, '#FFFFFF', 0.65), rimMid: M(K, '#FFFFFF', 0.35), rimLo: M(K, '#000000', 0.13), wellHi: M(K, '#FFFFFF', 0.45), side: M(K, '#000000', 0.07), sideLo: M(K, '#000000', 0.28), starLo: M(K, '#FFFFFF', 0.35) },
    I: { glow: M(P, '#FFFFFF', 0.12), planet: M(S, '#FFFFFF', 0.3), visor: pMuted, accent: M(P, '#FFFFFF', 0.25), star: S }
  };
}
const theme = buildTheme();
const C = theme.C, I = theme.I;

/* ---------- tiny UI-kit helpers (replace the design-system React components) ---------- */
const icon = (name, size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="fs-icon" aria-hidden="true">${ICONS[name].map((d) => `<path d="${d}" fill="currentColor"></path>`).join('')}</svg>`;
const fsBtn = (hier, label, attrs = '', busy = false) => `<button type="button" class="fs-btn fs-btn--${hier} fs-btn--tone-brand fs-btn--lg${busy ? ' is-loading' : ''}"${busy ? ' disabled' : ''} ${attrs}>${busy ? '<span class="fs-spinner" aria-hidden="true"></span>' : ''}<span class="fs-btn__label">${esc(label)}</span></button>`;
/* the design-system CSS has no "muted-indigo" badge, so (like the designer's page) indigo is set inline */
const badge = (color, text) => `<span class="fs-badge fs-badge--sm fs-badge--pill fs-badge--muted-${color}"${color === 'indigo' ? ' style="background: var(--bg-util-indigo); color: var(--text-util-indigo);"' : ''}>${esc(text)}</span>`;
const progressBar = (pct, label, valueLabel, variant) => `<div class="af-progress af-progress--${variant}" style="width: 100%;"><div class="af-progress-head"><span class="af-progress-label">${esc(label)}</span><span class="af-progress-value">${esc(valueLabel)}</span></div><div class="af-progress-track" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div class="af-progress-fill" style="width: ${pct}%;"></div></div></div>`;



/* ---------- design-system icons used by the AksornFirst widgets (tabs, breadcrumb, "…" button) ---------- */
const afIcon = (name, size, cls = 'af-icon') => { const ic = AF_ICONS[name]; return `<svg class="${cls}" width="${size}" height="${size}" viewBox="${ic.vb}" aria-hidden="true" focusable="false">${ic.d.map((d) => `<path d="${d}" fill="currentColor"></path>`).join('')}</svg>`; };

/* ---------- shared page frame: top bar + left menu (used by every page) ---------- */
const NAV = [['home', 'home'], ['courses', 'book-open'], ['classroom', 'school-blackboard-chalk'], ['exercises', 'document-pencil-right-top'], ['summary', 'light-bulb-idea']];

function kitRail(active) {
  const links = (window.COPY.navLinks || {});
  return NAV.map(([key, ic]) => {
    const href = links[key], on = key === active, soon = !href;
    const attrs = `href="${esc(href || '#')}"${on ? ' aria-current="page"' : ''}${soon ? ` data-soon aria-disabled="true" title="${esc(T.navSoon)}"` : ''}`;
    const common = `height: 96px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; text-decoration: none; font-size: 14px;`;
    return on
      ? `<a class="rail-link" ${attrs} style="position: relative; ${common} color: var(--primary-onMutedDefault); font-weight: 600;"><span style="position: absolute; left: 0; top: 12px; bottom: 12px; width: 3px; border-radius: 0 3px 3px 0; background: var(--primary-default);"></span><span style="width: 44px; height: 44px; border-radius: 10px; background: var(--primary-mutedDefault); color: var(--primary-default); display: flex; align-items: center; justify-content: center;">${icon(ic, 24)}</span>${esc(T.nav[key])}</a>`
      : `<a class="rail-link" ${attrs} style="${common} color: ${soon ? 'var(--text-ghost, #808080)' : 'var(--text-subtle)'}; font-weight: 500;${soon ? ' cursor: default;' : ''}"><span style="width: 44px; height: 44px; border-radius: 10px; border: 1px solid var(--border-default); background: var(--bg-surface); display: flex; align-items: center; justify-content: center;${soon ? ' opacity: .6;' : ''}">${icon(ic, 24)}</span>${esc(T.nav[key])}</a>`;
  }).join('');
}

/* middle = html between the menu button and the right-hand tools; coin = html placed before the avatar; fontPressed = 0|1|2 */
function kitHeader({ middle = "", coin = "", fontPressed = 1, active = "home" } = {}) {
  const glyph = (i, fs) => { const on = i === fontPressed; return `<button type="button" aria-pressed="${on}" style="width: 36px; height: 36px; border: 0; border-radius: 9999px; background: ${on ? 'var(--primary-default)' : 'transparent'}; color: ${on ? '#FFFFFF' : 'var(--text-default)'}; font: ${on ? 600 : 500} ${fs}px var(--font-sans); cursor: pointer;">${esc(T.fontSizeGlyph)}</button>`; };
  const fontGroup = (cls) => `<div role="group" class="${cls}" aria-label="${esc(T.fontSizeGroup)}" style="display: flex; align-items: center; gap: 2px; padding: 4px; border-radius: 9999px; background: var(--primary-mutedDefault);">${glyph(0, 14)}${glyph(1, 17)}${glyph(2, 21)}</div>`;
  /* ponytail: native <dialog> = drawer (focus trap, Esc, backdrop for free). Left rail is hidden <=720px and the same links live here (Figma 38162:28964). */
  const links = T.navLinks || {};
  const dnav = NAV.map(([key, ic]) => {
    const href = links[key], on = key === active, soon = !href;
    return `<a class="dn-item${on ? ' is-on' : ''}" href="${esc(href || '#')}"${on ? ' aria-current="page"' : ''}${soon ? ` data-soon aria-disabled="true" title="${esc(T.navSoon)}"` : ''}><span class="dn-ic">${icon(ic, 32)}</span><span class="dn-label">${esc(T.nav[key])}</span></a>`;
  }).join('');
  const drawer = `<dialog id="navDrawer" class="navDrawer" aria-label="${esc(T.navLabel)}">
    <div class="dn-top"><button type="button" class="dn-close" data-menu-close aria-label="${esc(T.menuClose)}"><img src="assets/icon-close.svg" width="28" height="28" alt=""></button></div>
    <nav class="dn-wrap" aria-label="${esc(T.navLabel)}">${dnav}</nav>
    <div class="dn-wrap" style="flex: none;"><button type="button" class="dn-item dn-help"><img src="assets/icon-help.svg" width="24" height="24" alt=""><span class="dn-label">${esc(T.help)}</span></button></div>
  </dialog>`;
  return `${drawer}<header class="in0 hdr" style="height: 76px; box-sizing: border-box; background: #FFFFFF; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
    <button type="button" data-menu-open aria-haspopup="dialog" aria-label="${esc(T.menuButton)}" style="width: 44px; height: 44px; border: 0; border-radius: 10px; background: transparent; color: var(--icon-default); display: flex; align-items: center; justify-content: center; cursor: pointer;">${icon('menu-burger', 24)}</button>
    <span class="hdr-title">${esc(T.nav[active])}</span>
    <div class="hdr-mid" style="display: contents;">${middle}</div>
    <div style="display: flex; align-items: center; gap: 12px;">
      ${fontGroup('hdr-fs')}
      <button type="button" aria-label="${esc(T.notifications)}" style="width: 44px; height: 44px; border: 0; border-radius: 10px; background: transparent; color: var(--icon-default); display: flex; align-items: center; justify-content: center; cursor: pointer;">${icon('bell-notification', 24)}</button>
      ${coin}
      <button type="button" aria-label="${esc(T.account)}" style="height: 44px; padding: 4px; border: 0; border-radius: 9999px; background: transparent; display: flex; align-items: center; gap: 4px; cursor: pointer; color: var(--icon-default);"><span class="fs-avatar fs-avatar--small" title="${esc(T.userName)}" role="img" aria-label="${esc(T.userName)}"><span class="fs-avatar__initials">${esc(T.userInitials)}</span></span><span class="hdr-chev" style="display: flex;">${icon('arrows-down-arrow-hint', 20)}</span></button>
    </div>
  </header>`;
}

/* Starcoin balance chip for the top bar (same on every page) + the gradient defs its coin icon needs */
const kitCoinChip = (count) => `<span class="coinChip" id="coinChip" role="img" aria-label="${esc(f(T.coinChipAria, { n: count }))}" style="position: relative; display: inline-flex; align-items: center; gap: 8px; height: 40px; box-sizing: border-box; padding: 0 14px 0 8px; border-radius: 9999px; border: 1px solid var(--border-default); background: var(--bg-surface); color: var(--text-default);">
        <span style="flex: 0 0 auto; display: flex; align-items: center; justify-content: center;"><span id="coinIcon" style="display: block; width: 24px; height: 24px;">${S.headerCoin(C, I)}</span></span>
        <span class="hdr-label" aria-hidden="true" style="font-size: 18px; line-height: 28px; font-weight: 600; color: var(--text-subtle);">${esc(T.coinLabel)}</span>
        <span id="count" aria-hidden="true" style="display: inline-block; min-width: 32px; font-size: 18px; line-height: 28px; font-weight: 700; font-variant-numeric: tabular-nums;">${count}</span>
        <span class="plus" id="plus" aria-hidden="true" style="position: absolute; right: calc(100% + 8px); top: 6px; font-size: 20px; font-weight: 700; color: var(--secondary-onMutedDefault);">${esc(f(T.coinPlus, { n: reward() }))}</span>
      </span>`;
const kitDefs = () => `<svg width="0" height="0" aria-hidden="true" style="position: absolute;"><defs>${S.defs(C, I)}</defs></svg>`;

/* menu items with no page yet do nothing */
document.addEventListener('click', (e) => { if (e.target.closest('a[data-soon]')) e.preventDefault(); });

/* hamburger -> drawer; click the backdrop (the dialog itself) or x to close */
document.addEventListener('click', (e) => {
  const d = document.getElementById('navDrawer'); if (!d) return;
  if (e.target.closest('[data-menu-open]')) d.showModal();
  else if (e.target === d || e.target.closest('[data-menu-close]')) d.close();
});

/* apply the colour theme to the page root */
function kitMount(root, motionOff) {
  root.className = motionOff ? 'still' : 'motion';
  root.setAttribute('style', theme.vars + ' position: relative; min-height: 100vh; display: flex; flex-direction: column; font-family: var(--font-sans); color: var(--text-default); background: var(--bg-surface);');
}


/* =====================================================================
 * Page loader: rocket + 5 stars (from the designer's "STAR Loading" artboard).
 * Shown when a page opens and when you click a menu / breadcrumb link, so every
 * page change plays the same short animation. Timing -> CONFIG.loaderMs.
 * ===================================================================== */
const LD_KEY = 'starNavAt';       // time of the click that left the previous page (sessionStorage)
const LD_COVER = 100;             // ms the loader takes to fade in over the page you are leaving
const LD_FADE = 140;              // ms the loader takes to fade out
const LD_MAXWAIT = 4000;          // never keep the loader up longer than this, even if a font / image is stuck
let kitRevealAt = 0;
const kitHoldMs = () => Math.max(0, kitRevealAt - Date.now());   // ms until the page underneath is revealed

const ldMotion = () => {
  if (CONFIG.reduceMotion || !(CONFIG.loaderMs > 0)) return false;
  try { return !matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return true; }
};

function ldHTML(hold) {
  const stars = [0, 1, 2, 3, 4].map((i) => `<svg class="ld-s" style="--i:${i}" width="52" height="52" viewBox="1.7 1.7 20.6 20.6" aria-hidden="true"><defs><clipPath id="ldc${i}"><rect class="ld-f" style="--i:${i}" x="0" y="0" width="24" height="24"></rect></clipPath></defs><path d="M11.53 3.46Q12.00 2.50 12.47 3.46L14.43 7.54Q14.90 8.50 15.96 8.64L20.44 9.26Q21.50 9.40 20.73 10.14L17.47 13.26Q16.70 14.00 16.89 15.05L17.71 19.45Q17.90 20.50 16.95 20.00L12.95 17.90Q12.00 17.40 11.05 17.90L7.05 20.00Q6.10 20.50 6.29 19.45L7.11 15.05Q7.30 14.00 6.53 13.26L3.27 10.14Q2.50 9.40 3.56 9.26L8.04 8.64Q9.10 8.50 9.57 7.54Z" fill="url(#ldEmpty)" stroke="url(#ldEmpty)" stroke-width="1.6" stroke-linejoin="round"></path><ellipse cx="9.6" cy="8.6" rx="2.2" ry="1.2" transform="rotate(-35 9.6 8.6)" fill="#FFFFFF" opacity=".75"></ellipse><g clip-path="url(#ldc${i})"><path d="M11.53 3.46Q12.00 2.50 12.47 3.46L14.43 7.54Q14.90 8.50 15.96 8.64L20.44 9.26Q21.50 9.40 20.73 10.14L17.47 13.26Q16.70 14.00 16.89 15.05L17.71 19.45Q17.90 20.50 16.95 20.00L12.95 17.90Q12.00 17.40 11.05 17.90L7.05 20.00Q6.10 20.50 6.29 19.45L7.11 15.05Q7.30 14.00 6.53 13.26L3.27 10.14Q2.50 9.40 3.56 9.26L8.04 8.64Q9.10 8.50 9.57 7.54Z" fill="url(#ldFill)" stroke="url(#ldFill)" stroke-width="1.6" stroke-linejoin="round"></path><path d="M11.56 8.36Q12.00 7.46 12.44 8.36L13.38 10.31Q13.81 11.21 14.80 11.35L16.95 11.64Q17.94 11.78 17.22 12.47L15.66 13.96Q14.94 14.65 15.12 15.63L15.51 17.73Q15.69 18.71 14.80 18.25L12.89 17.24Q12.00 16.77 11.11 17.24L9.20 18.25Q8.31 18.71 8.49 17.73L8.88 15.63Q9.06 14.65 8.34 13.96L6.78 12.47Q6.06 11.78 7.05 11.64L9.20 11.35Q10.19 11.21 10.62 10.31Z" fill="#FFFFFF" opacity=".18"></path><ellipse cx="9.6" cy="8.6" rx="2.4" ry="1.3" transform="rotate(-35 9.6 8.6)" fill="#FFFFFF" opacity=".8"></ellipse></g></svg>`).join('');
  return `<div id="ldr" class="ld" role="status" aria-label="${esc(T.loaderText || 'Loading...')}" style="--ld-d:${Math.round(hold)}ms">
    <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;">
      <path d="M-40 610C160 560 420 650 520 900" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="2 14" stroke-linecap="round"></path>
      <path d="M980 -20C1060 120 1260 170 1460 120" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="2 14" stroke-linecap="round"></path>
      <g fill="#C3D3E8"><circle cx="200" cy="200" r="86" fill="#FFFFFF"></circle><circle cx="172" cy="176" r="16" fill="#A9C4EC"></circle><circle cx="230" cy="232" r="10" fill="#A9C4EC"></circle><circle cx="226" cy="168" r="7" fill="#A9C4EC"></circle>
        <ellipse cx="200" cy="200" rx="138" ry="26" transform="rotate(-18 200 200)" fill="none" stroke="#A9C4EC" stroke-width="10" stroke-linecap="round"></ellipse></g>
      <g><circle cx="1250" cy="720" r="58" fill="#FFF4E6"></circle><circle cx="1232" cy="702" r="12" fill="#FFD9A8"></circle><circle cx="1272" cy="742" r="8" fill="#FFD9A8"></circle></g>
      <circle cx="1230" cy="180" r="24" fill="#FFFFFF"></circle>
      <circle cx="250" cy="330" r="5" fill="#A9C4EC"></circle><circle cx="1290" cy="260" r="4" fill="#A9C4EC"></circle><circle cx="170" cy="700" r="4" fill="#A9C4EC"></circle><circle cx="1130" cy="760" r="6" fill="#A9C4EC"></circle><circle cx="660" cy="820" r="4" fill="#A9C4EC"></circle><circle cx="1010" cy="190" r="4" fill="#A9C4EC"></circle><circle cx="60" cy="250" r="3" fill="#A9C4EC"></circle><circle cx="1400" cy="820" r="4" fill="#A9C4EC"></circle>
      <path d="M379.01 118.58Q380.00 116.54 380.99 118.58L383.12 123.00Q384.11 125.04 386.35 125.35L391.21 126.01Q393.46 126.32 391.82 127.88L388.29 131.27Q386.66 132.83 387.07 135.06L387.95 139.81Q388.36 142.04 386.35 140.99L382.01 138.70Q380.00 137.65 377.99 138.70L373.65 140.99Q371.64 142.04 372.05 139.81L372.93 135.06Q373.34 132.83 371.71 131.27L368.18 127.88Q366.54 126.32 368.79 126.01L373.65 125.35Q375.89 125.04 376.88 123.00Z" fill="#A9C4EC"></path>
      <path d="M1069.25 101.27Q1070.00 99.71 1070.75 101.27L1072.39 104.65Q1073.14 106.21 1074.86 106.44L1078.57 106.95Q1080.29 107.18 1079.04 108.38L1076.34 110.97Q1075.09 112.17 1075.41 113.87L1076.08 117.50Q1076.39 119.21 1074.86 118.40L1071.53 116.66Q1070.00 115.85 1068.47 116.66L1065.14 118.40Q1063.61 119.21 1063.92 117.50L1064.59 113.87Q1064.91 112.17 1063.66 110.97L1060.96 108.38Q1059.71 107.18 1061.43 106.95L1065.14 106.44Q1066.86 106.21 1067.61 104.65Z" fill="#FFD9A8"></path>
      <path d="M1349.13 419.93Q1350.00 418.12 1350.87 419.93L1352.75 423.82Q1353.62 425.62 1355.61 425.90L1359.89 426.48Q1361.88 426.75 1360.43 428.13L1357.32 431.12Q1355.88 432.50 1356.24 434.47L1357.01 438.66Q1357.38 440.62 1355.60 439.69L1351.77 437.68Q1350.00 436.75 1348.23 437.68L1344.40 439.69Q1342.62 440.62 1342.99 438.66L1343.76 434.47Q1344.12 432.50 1342.68 431.12L1339.57 428.13Q1338.12 426.75 1340.11 426.48L1344.39 425.90Q1346.38 425.62 1347.25 423.82Z" fill="#A9C4EC"></path>
      <path d="M109.25 511.27Q110.00 509.71 110.75 511.27L112.39 514.65Q113.14 516.21 114.86 516.44L118.57 516.95Q120.29 517.18 119.04 518.38L116.34 520.97Q115.09 522.17 115.41 523.87L116.08 527.50Q116.39 529.21 114.86 528.40L111.53 526.66Q110.00 525.85 108.47 526.66L105.14 528.40Q103.61 529.21 103.92 527.50L104.59 523.87Q104.91 522.17 103.66 520.97L100.96 518.38Q99.71 517.18 101.43 516.95L105.14 516.44Q106.86 516.21 107.61 514.65Z" fill="#FFD9A8"></path>
      <path d="M299.13 779.93Q300.00 778.12 300.87 779.93L302.75 783.82Q303.62 785.62 305.61 785.90L309.89 786.48Q311.88 786.75 310.43 788.13L307.32 791.12Q305.88 792.50 306.24 794.47L307.01 798.66Q307.38 800.62 305.60 799.69L301.77 797.68Q300.00 796.75 298.23 797.68L294.40 799.69Q292.62 800.62 292.99 798.66L293.76 794.47Q294.12 792.50 292.68 791.12L289.57 788.13Q288.12 786.75 290.11 786.48L294.39 785.90Q296.38 785.62 297.25 783.82Z" fill="#A9C4EC"></path>
      <path d="M989.36 792.61Q990.00 791.29 990.64 792.61L992.02 795.47Q992.66 796.79 994.11 796.99L997.26 797.42Q998.71 797.62 997.65 798.63L995.37 800.82Q994.31 801.83 994.57 803.28L995.14 806.35Q995.41 807.79 994.11 807.11L991.30 805.63Q990.00 804.95 988.70 805.63L985.89 807.11Q984.59 807.79 984.86 806.35L985.43 803.28Q985.69 801.83 984.63 800.82L982.35 798.63Q981.29 797.62 982.74 797.42L985.89 796.99Q987.34 796.79 987.98 795.47Z" fill="#A9C4EC"></path>
      <path d="M1179.48 593.96Q1180.00 592.88 1180.52 593.96L1181.65 596.29Q1182.17 597.38 1183.36 597.54L1185.94 597.89Q1187.12 598.05 1186.26 598.88L1184.39 600.67Q1183.53 601.50 1183.74 602.68L1184.21 605.19Q1184.42 606.38 1183.36 605.82L1181.06 604.61Q1180.00 604.05 1178.94 604.61L1176.64 605.82Q1175.58 606.38 1175.79 605.19L1176.26 602.68Q1176.47 601.50 1175.61 600.67L1173.74 598.88Q1172.88 598.05 1174.06 597.89L1176.64 597.54Q1177.83 597.38 1178.35 596.29Z" fill="#FFD9A8"></path>
      <path d="M559.54 74.63Q560.00 73.67 560.46 74.63L561.47 76.71Q561.93 77.67 562.99 77.81L565.28 78.12Q566.33 78.27 565.56 79.00L563.90 80.60Q563.13 81.33 563.33 82.38L563.74 84.62Q563.93 85.67 562.99 85.17L560.94 84.10Q560.00 83.60 559.06 84.10L557.01 85.17Q556.07 85.67 556.26 84.62L556.67 82.38Q556.87 81.33 556.10 80.60L554.44 79.00Q553.67 78.27 554.72 78.12L557.01 77.81Q558.07 77.67 558.53 76.71Z" fill="#A9C4EC"></path>
      <path d="M839.54 854.63Q840.00 853.67 840.46 854.63L841.47 856.71Q841.93 857.67 842.99 857.81L845.28 858.12Q846.33 858.27 845.56 859.00L843.90 860.60Q843.13 861.33 843.33 862.38L843.74 864.62Q843.93 865.67 842.99 865.17L840.94 864.10Q840.00 863.60 839.06 864.10L837.01 865.17Q836.07 865.67 836.26 864.62L836.67 862.38Q836.87 861.33 836.10 860.60L834.44 859.00Q833.67 858.27 834.72 858.12L837.01 857.81Q838.07 857.67 838.53 856.71Z" fill="#FFD9A8"></path>
    </svg>
    <svg width="0" height="0" aria-hidden="true" style="position: absolute;"><defs>
      <linearGradient id="ldBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"></stop><stop offset=".55" stop-color="#E3EDFC"></stop><stop offset="1" stop-color="#9DBBE8"></stop></linearGradient>
      <linearGradient id="ldBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3C7BE0"></stop><stop offset="1" stop-color="#003783"></stop></linearGradient>
      <linearGradient id="ldCap" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3C7BE0"></stop><stop offset=".6" stop-color="#004DB2"></stop><stop offset="1" stop-color="#003783"></stop></linearGradient>
      <radialGradient id="ldGlass" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#5B9BF5"></stop><stop offset=".55" stop-color="#004DB2"></stop><stop offset="1" stop-color="#00285F"></stop></radialGradient>
      <linearGradient id="ldFlame" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#FFB24F"></stop><stop offset="1" stop-color="#F98A1A"></stop></linearGradient>
      <radialGradient id="ldGlow"><stop offset="0" stop-color="#F99D33" stop-opacity=".45"></stop><stop offset="1" stop-color="#F99D33" stop-opacity="0"></stop></radialGradient>
      <radialGradient id="ldPuff" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#FFFFFF"></stop><stop offset="1" stop-color="#DCE8F8"></stop></radialGradient>
      <linearGradient id="ldStar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD27A"></stop><stop offset="1" stop-color="#EE8420"></stop></linearGradient>
      <radialGradient id="ldHalo"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".95"></stop><stop offset=".6" stop-color="#FFFFFF" stop-opacity=".45"></stop><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"></stop></radialGradient>
      <clipPath id="ldClip"><path d="M124 120C124 88 150 70 186 70C238 70 292 92 300 120C292 148 238 170 186 170C150 170 124 152 124 120Z"></path></clipPath>
      <linearGradient id="ldFill" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="#FFD98A"></stop><stop offset=".5" stop-color="#FBA544"></stop><stop offset="1" stop-color="#EB7F1C"></stop></linearGradient>
      <linearGradient id="ldEmpty" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="#FFFFFF"></stop><stop offset="1" stop-color="#B7CEF0"></stop></linearGradient>
    </defs></svg>
    <div class="ld-main" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 40px;">
      <div style="position: relative; width: 340px; height: 220px;" aria-hidden="true">
        <svg width="340" height="220" viewBox="0 0 340 220" style="position: absolute; inset: 0; overflow: visible;">
          <line class="ld-trail" x1="20" y1="118" x2="74" y2="104" stroke="#7FA8E0" stroke-width="8" stroke-linecap="round"></line>
          <line class="ld-trail t2" x1="0" y1="150" x2="64" y2="132" stroke="#7FA8E0" stroke-width="8" stroke-linecap="round"></line>
          <line class="ld-trail t3" x1="34" y1="178" x2="84" y2="164" stroke="#7FA8E0" stroke-width="8" stroke-linecap="round"></line>
          <g class="ld-spark" style="transform-box: fill-box; transform-origin: center;"><path d="M249.36 16.61Q250.00 15.29 250.64 16.61L252.02 19.47Q252.66 20.79 254.11 20.99L257.26 21.42Q258.71 21.62 257.65 22.63L255.37 24.82Q254.31 25.83 254.57 27.28L255.14 30.35Q255.41 31.79 254.11 31.11L251.30 29.63Q250.00 28.95 248.70 29.63L245.89 31.11Q244.59 31.79 244.86 30.35L245.43 27.28Q245.69 25.83 244.63 24.82L242.35 22.63Q241.29 21.62 242.74 21.42L245.89 20.99Q247.34 20.79 247.98 19.47Z" fill="url(#ldStar)"></path></g>
          <g class="ld-spark s2" style="transform-box: fill-box; transform-origin: center;"><path d="M317.59 64.51Q318.00 63.67 318.41 64.51L319.53 66.83Q319.93 67.67 320.86 67.79L323.41 68.14Q324.33 68.27 323.66 68.91L321.81 70.69Q321.13 71.33 321.30 72.25L321.76 74.75Q321.93 75.67 321.11 75.23L318.83 74.03Q318.00 73.60 317.17 74.03L314.89 75.23Q314.07 75.67 314.24 74.75L314.70 72.25Q314.87 71.33 314.19 70.69L312.34 68.91Q311.67 68.27 312.59 68.14L315.14 67.79Q316.07 67.67 316.47 66.83Z" fill="url(#ldStar)"></path></g>
          <g class="ld-spark s3" style="transform-box: fill-box; transform-origin: center;"><path d="M199.67 201.14Q200.00 200.46 200.33 201.14L201.36 203.28Q201.69 203.96 202.44 204.06L204.79 204.38Q205.54 204.48 204.99 205.01L203.29 206.64Q202.74 207.17 202.88 207.91L203.30 210.21Q203.44 210.96 202.77 210.61L200.67 209.50Q200.00 209.15 199.33 209.50L197.23 210.61Q196.56 210.96 196.70 210.21L197.12 207.91Q197.26 207.17 196.71 206.64L195.01 205.01Q194.46 204.48 195.21 204.38L197.56 204.06Q198.31 203.96 198.64 203.28Z" fill="url(#ldStar)"></path></g>
        </svg>
        <svg class="ld-rocket" width="340" height="220" viewBox="0 0 340 220" style="position: absolute; inset: 0; overflow: visible;">
          <g transform="rotate(-16 200 120)">
            <ellipse cx="214" cy="120" rx="128" ry="84" fill="url(#ldHalo)"></ellipse>
            <circle cx="92" cy="120" r="46" fill="url(#ldGlow)"></circle>
            <circle class="ld-puff" cx="70" cy="128" r="14" fill="url(#ldPuff)"></circle>
            <circle class="ld-puff p2" cx="70" cy="112" r="11" fill="url(#ldPuff)"></circle>
            <circle class="ld-puff p3" cx="70" cy="122" r="9" fill="url(#ldPuff)"></circle>
            <g class="ld-flame" style="transform-box: fill-box; transform-origin: 100% 50%;">
              <path d="M118 120C102 98 74 94 44 120C74 146 102 142 118 120Z" fill="url(#ldFlame)"></path>
              <path d="M116 120C104 106 86 104 66 120C86 136 104 134 116 120Z" fill="#FFC978"></path>
              <path d="M114 120C106 112 96 111 84 120C96 129 106 128 114 120Z" fill="#FFF3DC"></path>
            </g>
            <path d="M158 80C154 56 138 40 118 40C102 40 96 56 106 70C116 84 130 92 150 98Z" fill="url(#ldBlue)"></path>
            <path d="M158 160C154 184 138 200 118 200C102 200 96 184 106 170C116 156 130 148 150 142Z" fill="url(#ldBlue)"></path>
            <path d="M118 46C110 48 106 56 110 64" stroke="#FFFFFF" stroke-opacity=".35" stroke-width="5" stroke-linecap="round" fill="none"></path>
            <rect x="106" y="98" width="30" height="44" rx="14" fill="url(#ldBlue)"></rect>
            <path d="M124 120C124 88 150 70 186 70C238 70 292 92 300 120C292 148 238 170 186 170C150 170 124 152 124 120Z" fill="url(#ldBody)"></path>
            <g clip-path="url(#ldClip)">
              <ellipse cx="200" cy="176" rx="130" ry="34" fill="#6F97D6" opacity=".55"></ellipse>
              <circle cx="322" cy="120" r="68" fill="url(#ldCap)"></circle>
              <rect x="142" y="60" width="16" height="120" rx="8" fill="url(#ldBlue)"></rect>
              <ellipse cx="196" cy="86" rx="46" ry="9" fill="#FFFFFF" opacity=".9"></ellipse>
              <ellipse cx="270" cy="96" rx="12" ry="5" transform="rotate(20 270 96)" fill="#FFFFFF" opacity=".35"></ellipse>
            </g>
            <circle cx="212" cy="118" r="26" fill="#E8F1FF"></circle>
            <circle cx="213" cy="120" r="19" fill="#003783" opacity=".35"></circle>
            <circle cx="212" cy="118" r="18" fill="url(#ldGlass)"></circle>
            <ellipse cx="205" cy="110" rx="7" ry="4.5" transform="rotate(-30 205 110)" fill="#FFFFFF" opacity=".85"></ellipse>
            <circle cx="220" cy="126" r="2.6" fill="#FFFFFF" opacity=".8"></circle>
            <path d="M175.12 133.11Q176.00 131.29 176.88 133.11L177.78 134.98Q178.66 136.79 180.66 137.06L182.71 137.34Q184.71 137.62 183.25 139.01L181.76 140.44Q180.31 141.83 180.67 143.82L181.04 145.81Q181.41 147.79 179.62 146.85L177.79 145.89Q176.00 144.95 174.21 145.89L172.38 146.85Q170.59 147.79 170.96 145.81L171.33 143.82Q171.69 141.83 170.24 140.44L168.75 139.01Q167.29 137.62 169.29 137.34L171.34 137.06Q173.34 136.79 174.22 134.98Z" fill="url(#ldStar)"></path>
          </g>
        </svg>
      </div>
      <div class="ld-bar" style="display: flex; gap: 4px; align-items: center;" aria-hidden="true">${stars}</div>
      <p style="margin: 0; font-size: 30px; line-height: 1.3; font-weight: 700; color: #004DB2;">${esc(T.loaderText || 'Loading...')}</p>
    </div>
  </div>`;
}

/* put the loader on screen. cover = true: fade in over the page you are leaving (stars wait); otherwise show at once and fill the stars over `hold` ms */
function ldShow(cover, hold) {
  const old = document.getElementById('ldr'); if (old) old.remove();
  document.body.insertAdjacentHTML('beforeend', ldHTML(hold || CONFIG.loaderMs));
  const el = document.getElementById('ldr');
  if (cover) { el.classList.add('wait', 'in'); void el.offsetWidth; el.classList.remove('in'); }
  else el.classList.add('go');
}
/* run cb once the page underneath is settled: fonts swapped in, images decoded, window loaded (capped so a slow network never traps you) */
function ldWhenReady(cb) {
  let done = false;
  const go = () => { if (!done) { done = true; cb(); } };
  setTimeout(go, LD_MAXWAIT);
  try {
    void document.body.offsetHeight;                   // force layout so every font the page uses is requested now
    const p = [];
    if (document.fonts && document.fonts.ready) p.push(document.fonts.ready);
    [].forEach.call(document.images, (im) => { if (im.decode) p.push(im.decode().catch(() => {})); });
    if (document.readyState !== 'complete') p.push(new Promise((r) => addEventListener('load', r, { once: true })));
    Promise.all(p).then(() => setTimeout(go, 50));   // a beat for one frame to paint with the final fonts (a timer, not rAF: rAF stalls in background tabs)
  } catch (er) { go(); }
}
function ldHide() {
  const el = document.getElementById('ldr'), h = document.documentElement;
  h.classList.add('ld-done');                        // the loader is the transition: the page appears fully laid out, nothing slides in
  h.classList.remove('ld-hold');
  if (!el) { h.classList.remove('ld-on'); return; }
  el.classList.add('out');
  setTimeout(() => { el.remove(); h.classList.remove('ld-on'); }, LD_FADE + 40);
}

/* a click on a link to another page: cover the screen, then go */
document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || !ldMotion()) return;
  const a = e.target.closest('a[href]');
  if (!a || a.hasAttribute('data-soon') || a.hasAttribute('download') || (a.target && a.target !== '_self') || a.getAttribute('aria-current') === 'page') return;
  let u; try { u = new URL(a.href, location.href); } catch (er) { return; }
  if (u.origin !== location.origin || u.pathname === location.pathname) return;
  e.preventDefault();
  if (document.getElementById('ldr')) return;           // already on its way
  try { sessionStorage.setItem(LD_KEY, String(Date.now())); } catch (er) { /* storage blocked: the new page just plays a full loader */ }
  ldShow(true);
  setTimeout(() => { location.href = a.href; }, LD_COVER);
});

/* coming back with the browser's back button can restore a page that still has the loader on it */
addEventListener('pageshow', (e) => {
  if (!e.persisted) return;
  const el = document.getElementById('ldr'); if (el) el.remove();
  document.documentElement.classList.remove('ld-on', 'ld-hold');
});

/* this page just opened */
(function ldBoot() {
  const h = document.documentElement;
  if (!ldMotion()) { h.classList.remove('ld-on', 'ld-hold'); return; }
  let t0 = 0;
  try { t0 = Number(sessionStorage.getItem(LD_KEY)) || 0; sessionStorage.removeItem(LD_KEY); } catch (er) { t0 = 0; }
  const used = t0 && Date.now() - t0 < 5000 ? Date.now() - t0 : 0;     // time already spent since the click
  const hold = Math.max(CONFIG.loaderMinMs, CONFIG.loaderMs - used);
  kitRevealAt = Date.now() + hold;
  ldShow(false, hold);
  setTimeout(() => ldWhenReady(ldHide), hold);
})();

/* ===== illustrations: coins, stars, astronaut ===== */
const S = {
  defs: (C, I, w, h) => `      <linearGradient id="fscSide" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.side}"></stop><stop offset="1" stop-color="${C.sideLo}"></stop></linearGradient>
      <linearGradient id="fscRim" x1="0.15" y1="0.05" x2="0.85" y2="0.95"><stop offset="0" stop-color="${C.rimHi}"></stop><stop offset="0.35" stop-color="${C.rimMid}"></stop><stop offset="0.7" stop-color="${C.face}"></stop><stop offset="1" stop-color="${C.rimLo}"></stop></linearGradient>
      <linearGradient id="fscWell" x1="0.85" y1="0.95" x2="0.15" y2="0.05"><stop offset="0" stop-color="${C.wellHi}"></stop><stop offset="1" stop-color="${C.rimLo}"></stop></linearGradient>
      <radialGradient id="fscFace" cx="0.38" cy="0.32" r="0.78"><stop offset="0" stop-color="${C.faceHi}"></stop><stop offset="0.55" stop-color="${C.face}"></stop><stop offset="1" stop-color="${C.faceLo}"></stop></radialGradient>
      <linearGradient id="fscStar" x1="0.2" y1="0" x2="0.8" y2="1"><stop offset="0" stop-color="#FFFCF2"></stop><stop offset="0.5" stop-color="#FFE7AE"></stop><stop offset="1" stop-color="${C.starLo}"></stop></linearGradient>
      
<clipPath id="fscClip"><circle cx="60" cy="58" r="52"></circle></clipPath>`,
  headerCoin: (C, I, w, h) => `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" style="display: block;"><circle cx="12" cy="12.8" r="11" fill="url(#fscSide)"></circle><circle cx="12" cy="12" r="11" fill="url(#fscRim)"></circle><circle cx="12" cy="12" r="8.4" fill="url(#fscFace)"></circle><path d="M12.00 5.90L13.94 9.63L18.09 10.32L15.14 13.32L15.76 17.48L12.00 15.60L8.24 17.48L8.86 13.32L5.91 10.32L10.06 9.63Z" transform="translate(0 .7)" fill="${C.sideLo}" opacity=".45"></path><path d="M12.00 5.90L13.94 9.63L18.09 10.32L15.14 13.32L15.76 17.48L12.00 15.60L8.24 17.48L8.86 13.32L5.91 10.32L10.06 9.63Z" fill="url(#fscStar)"></path></svg>`,
  heroDecor: (C, I, w, h) => `<svg aria-hidden="true" viewBox="0 0 1240 260" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;"><g fill="#ffffff"><circle cx="520" cy="40" r="2" opacity="0.5"></circle><circle cx="640" cy="90" r="1.5" opacity="0.4"></circle><circle cx="760" cy="30" r="2.5" opacity="0.6"></circle><circle cx="880" cy="120" r="1.5" opacity="0.35"></circle><circle cx="700" cy="200" r="2" opacity="0.4"></circle><circle cx="1180" cy="40" r="2" opacity="0.5"></circle></g><path d="M820 50l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#FFD9A8"></path><g fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.22"><path d="M600 214v-34c0-14 9-26 16-32 7 6 16 18 16 32v34z"></path><circle cx="616" cy="178" r="6"></circle><path d="M600 200l-10 14h10M632 200l10 14h-10M610 220l6 14 6-14"></path><circle cx="760" cy="196" r="20"></circle><ellipse cx="760" cy="198" rx="36" ry="9" transform="rotate(-16 760 198)"></ellipse><path d="M940 70a26 26 0 1 0 24 34 20 20 0 1 1-24-34z"></path></g><path d="M610 118l2.4 5.6 5.6 2.4-5.6 2.4-2.4 5.6-2.4-5.6-5.6-2.4 5.6-2.4z" fill="#9DC3FF"></path></svg>`,
  starBtn: (C, I, w, h) => `<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true" style="display: block; overflow: visible;">
                      <circle cx="32" cy="32" r="24" style="fill: var(--secondary-mutedDefault);"></circle>
                      <g class="rays" style="transform-origin: 32px 32px;">
                        <path d="M32 2v7M32 55v7M2 32h7M55 32h7M10.8 10.8l5 5M48.2 48.2l5 5M53.2 10.8l-5 5M15.8 48.2l-5 5" stroke-width="2.5" stroke-linecap="round" style="stroke: var(--secondary-mutedSelected);"></path>
                      </g>
                      <g class="starCore" style="transform-origin: 32px 32px;">
                        <g transform="translate(32 33) scale(0.62) translate(-60 -58)">
                          <path d="M60.0 31.0L68.8 47.9L87.6 51.0L74.3 64.6L77.0 83.5L60.0 75.0L43.0 83.5L45.7 64.6L32.4 51.0L51.2 47.9Z" transform="translate(0 3)" fill="url(#fscSide)" opacity=".6"></path>
                          <path d="M60.0 31.0L68.8 47.9L87.6 51.0L74.3 64.6L77.0 83.5L60.0 75.0L43.0 83.5L45.7 64.6L32.4 51.0L51.2 47.9Z" fill="url(#fscFace)" stroke="url(#fscRim)" stroke-width="3" stroke-linejoin="round"></path>
                          <path d="M60 60L60.0 31.0L68.8 47.9ZM60 60L87.6 51.0L74.3 64.6ZM60 60L77.0 83.5L60.0 75.0ZM60 60L43.0 83.5L45.7 64.6ZM60 60L32.4 51.0L51.2 47.9Z" fill="#FFFFFF" opacity=".38"></path>
                          <circle cx="54" cy="56" r="2.6" fill="#3A2A1E"></circle>
                          <circle cx="66" cy="56" r="2.6" fill="#3A2A1E"></circle>
                          <path d="M56.5 62q3.5 3 7 0" fill="none" stroke="#3A2A1E" stroke-width="1.8" stroke-linecap="round"></path>
                          <circle cx="50" cy="61" r="2.6" fill="#FF9FB0" opacity=".7"></circle>
                          <circle cx="70" cy="61" r="2.6" fill="#FF9FB0" opacity=".7"></circle>
                        </g>
                      </g>
                      <path class="tw tw1" d="M10 8q.9 3.6 4.5 4.5q-3.6.9-4.5 4.5q-.9-3.6-4.5-4.5q3.6-.9 4.5-4.5z" style="fill: var(--secondary-default);"></path>
                      <path class="tw tw2" d="M55 46q.7 2.8 3.5 3.5q-2.8.7-3.5 3.5q-.7-2.8-3.5-3.5q2.8-.7 3.5-3.5z" style="fill: var(--primary-default);"></path>
                      <path class="tw tw3" d="M54 6q.6 2.4 3 3q-2.4.6-3 3q-.6-2.4-3-3q2.4-.6 3-3z" style="fill: var(--secondary-default);"></path>
                    </svg>`,
  starBurst: (C, I, w, h) => `<svg class="spark s1" width="14" height="14" viewBox="-12 -12 24 24" style="position: absolute; left: 0; top: 6px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" style="fill: var(--secondary-default);"></path></svg><svg class="spark s2" width="12" height="12" viewBox="-12 -12 24 24" style="position: absolute; right: 0; top: 0;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" style="fill: var(--primary-default);"></path></svg><svg class="spark s3" width="14" height="14" viewBox="-12 -12 24 24" style="position: absolute; right: 4px; bottom: 2px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" style="fill: var(--secondary-default);"></path></svg><svg class="spark s4" width="10" height="10" viewBox="-12 -12 24 24" style="position: absolute; left: 6px; bottom: 6px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" style="fill: var(--primary-default);"></path></svg>`,
  dayCoin: (C, I, w, h) => `<svg viewBox="0 0 120 124" width="52" height="54" aria-hidden="true" style="display: block; overflow: visible;"><circle cx="60" cy="65" r="52" fill="url(#fscSide)"></circle><circle cx="60" cy="58" r="52" fill="url(#fscRim)"></circle><circle cx="60" cy="58" r="43" fill="url(#fscWell)"></circle><circle cx="60" cy="59" r="40" fill="url(#fscFace)"></circle><ellipse cx="47" cy="40" rx="17" ry="7" transform="rotate(-32 47 40)" fill="#FFFFFF" opacity=".2"></ellipse><path d="M60.0 31.0L68.8 47.9L87.6 51.0L74.3 64.6L77.0 83.5L60.0 75.0L43.0 83.5L45.7 64.6L32.4 51.0L51.2 47.9Z" transform="translate(0 2.6)" fill="${C.sideLo}" opacity=".45"></path><path d="M60.0 31.0L68.8 47.9L87.6 51.0L74.3 64.6L77.0 83.5L60.0 75.0L43.0 83.5L45.7 64.6L32.4 51.0L51.2 47.9Z" fill="url(#fscStar)" stroke="#FFF6E0" stroke-width="1.6" stroke-linejoin="round"></path><path d="M60 60L60.0 31.0L68.8 47.9ZM60 60L87.6 51.0L74.3 64.6ZM60 60L77.0 83.5L60.0 75.0ZM60 60L43.0 83.5L45.7 64.6ZM60 60L32.4 51.0L51.2 47.9Z" fill="#FFFFFF" opacity=".35"></path><path d="M60 60L51.2 47.9L60.0 31.0ZM60 60L68.8 47.9L87.6 51.0ZM60 60L74.3 64.6L77.0 83.5ZM60 60L60.0 75.0L43.0 83.5ZM60 60L45.7 64.6L32.4 51.0Z" fill="${C.face}" opacity=".3"></path><path d="M16.8 42.3A46 46 0 0 1 40.6 16.3" fill="none" stroke="#FFFFFF" stroke-width="3.6" stroke-linecap="round" opacity=".85"></path><g clip-path="url(#fscClip)"><g transform="rotate(22 60 60)"><rect x="-60" y="-30" width="14" height="190" fill="#FFFFFF" opacity=".4"></rect></g></g><path opacity=".8" d="M92 22Q93 27 98 28Q93 29 92 34Q91 29 86 28Q91 27 92 22Z" fill="#FFFFFF"></path></svg>`,
  daySparks: (C, I, w, h) => `<svg class="spark s1" width="14" height="14" viewBox="-12 -12 24 24" style="position: absolute; left: 0; top: 4px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" style="fill: var(--secondary-default);"></path></svg><svg class="spark s2" width="12" height="12" viewBox="-12 -12 24 24" style="position: absolute; right: 0; top: 10px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" style="fill: var(--primary-default);"></path></svg><svg class="spark s3" width="14" height="14" viewBox="-12 -12 24 24" style="position: absolute; right: 2px; bottom: 4px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" style="fill: var(--secondary-default);"></path></svg><svg class="spark s4" width="10" height="10" viewBox="-12 -12 24 24" style="position: absolute; left: 4px; bottom: 10px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" style="fill: var(--primary-default);"></path></svg>`,
  todayStar: (C, I, w, h) => `<svg viewBox="0 0 48 48" width="30" height="30" aria-hidden="true"><path d="M24 13L26.76 20.2L34.46 20.6L28.47 25.45L30.47 32.9L24 28.7L17.53 32.9L19.53 25.45L13.54 20.6L21.24 20.2Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" transform="translate(-12 -12) scale(1.5)"></path></svg>`,
  giftCoin: (C, I, w, h) => `<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12.8" r="11" fill="url(#fscSide)"></circle><circle cx="12" cy="12" r="11" fill="url(#fscRim)"></circle><circle cx="12" cy="12" r="8.4" fill="url(#fscFace)"></circle><path d="M12.00 5.90L13.94 9.63L18.09 10.32L15.14 13.32L15.76 17.48L12.00 15.60L8.24 17.48L8.86 13.32L5.91 10.32L10.06 9.63Z" fill="url(#fscStar)"></path></svg>`,
  astro: (C, I, w, h, aria) => `<svg viewBox="0 0 320 236" width="320" height="236" role="img" aria-label="${aria}" style="display: block; overflow: hidden;">
              <defs>
                <clipPath id="astroVisor"><circle cx="102" cy="134" r="36"></circle></clipPath>
                <filter id="astroRough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="4"></feTurbulence><feDisplacementMap in="SourceGraphic" scale="1.8"></feDisplacementMap></filter>
              </defs>
              <circle cx="168" cy="190" r="132" fill="${I.glow}"></circle>
              <circle cx="286" cy="150" r="16" fill="${I.planet}"></circle>
              <ellipse cx="286" cy="152" rx="28" ry="6" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.55" transform="rotate(-18 286 152)"></ellipse>
              <path d="M36 40q2 9 11 11q-9 2-11 11q-2-9-11-11q9-2 11-11z" fill="#FFFFFF" opacity="0.85"></path>
              <path d="M300 104q1.5 6 7.5 7.5q-6 1.5-7.5 7.5q-1.5-6-7.5-7.5q6-1.5 7.5-7.5z" fill="#FFFFFF" opacity="0.7"></path>
              <circle cx="196" cy="214" r="3" fill="#FFFFFF" opacity="0.6"></circle>
              <g class="astro">
                <g filter="url(#astroRough)">
                  <path d="M198 84L236 60L246 30" fill="none" stroke="#E4E0D8" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"></path>
                  <rect x="232" y="13" width="34" height="18" rx="8" fill="#4B505B" transform="rotate(-20 249 22)"></rect>
                  <rect x="140" y="58" width="64" height="40" rx="10" fill="#CFC7B5" transform="rotate(-35 172 78)"></rect>
                  <rect x="150" y="64" width="14" height="10" rx="3" fill="#B9B09C" transform="rotate(-35 172 78)"></rect>
                  <rect x="170" y="64" width="14" height="10" rx="3" fill="#B9B09C" transform="rotate(-35 172 78)"></rect>
                  <path d="M210 100L250 82L282 60" fill="none" stroke="#F3F1EC" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M244 92L272 72" fill="none" stroke="#E4E0D8" stroke-width="8" stroke-linecap="round" opacity="0.8"></path>
                  <rect x="272" y="44" width="34" height="18" rx="8" fill="#4B505B" transform="rotate(-35 289 53)"></rect>
                  <path d="M188 128L224 158" fill="none" stroke="#E4E0D8" stroke-width="20" stroke-linecap="round"></path>
                  <path d="M215 151L226 160" fill="none" stroke="#C9CDD4" stroke-width="21" stroke-linecap="round"></path>
                  <circle cx="234" cy="167" r="12" fill="#4B505B"></circle>
                  <ellipse cx="225" cy="176" rx="5" ry="4" fill="#4B505B" transform="rotate(40 225 176)"></ellipse>
                  <rect x="134" y="80" width="76" height="64" rx="28" fill="#F3F1EC" transform="rotate(-35 172 112)"></rect>
                  <ellipse cx="180" cy="126" rx="30" ry="9" fill="#E4E0D8" transform="rotate(-35 180 126)"></ellipse>
                  <rect x="178" y="98" width="17" height="13" rx="3" fill="${I.accent}" transform="rotate(-35 186 104)"></rect>
                  <path d="M186 99.5l1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4z" fill="${I.star}"></path>
                  <rect x="150" y="122" width="26" height="14" rx="4" fill="#D8D4CC" transform="rotate(-35 163 129)"></rect>
                  <circle cx="157.3" cy="133" r="2.2" fill="${I.star}"></circle>
                  <circle cx="163" cy="129" r="2.2" fill="${I.accent}"></circle>
                  <circle cx="168.7" cy="125" r="2.2" fill="#F4A3A0"></circle>
                  <path d="M146 162L84 194" fill="none" stroke="#F3F1EC" stroke-width="20" stroke-linecap="round"></path>
                  <path d="M92 190L80 196" fill="none" stroke="#C9CDD4" stroke-width="21" stroke-linecap="round"></path>
                  <circle cx="70" cy="200" r="12" fill="#4B505B"></circle>
                  <ellipse cx="74" cy="211" rx="5" ry="4" fill="#4B505B" transform="rotate(-20 74 211)"></ellipse>
                  <ellipse cx="146" cy="126" rx="13" ry="30" fill="#D8D4CC" transform="rotate(-35 146 126)"></ellipse>
                  <circle cx="108" cy="128" r="46" fill="#F4F2EE"></circle>
                  <path d="M148 106a46 46 0 0 1-56 64a46 46 0 0 0 56-64z" fill="#E4E0D8"></path>
                  <circle cx="102" cy="134" r="40" fill="#E2DED6"></circle>
                  <circle cx="102" cy="134" r="36" fill="#3C4660"></circle>
                  <g clip-path="url(#astroVisor)">
                    <circle cx="100" cy="142" r="26" fill="#F7D2B8"></circle>
                    <path d="M72 140q0-34 30-34q28 0 30 30q-8-12-20-14q-4 9-17 10q-9 0-13-7q-6 7-10 15z" fill="#4A2E22"></path>
                    <path d="M86 116q6-6 14-6" fill="none" stroke="#6B4434" stroke-width="2.5" stroke-linecap="round"></path>
                    <ellipse cx="91" cy="147" rx="2.6" ry="3.3" fill="#2E2A2A"></ellipse>
                    <ellipse cx="108" cy="147" rx="2.6" ry="3.3" fill="#2E2A2A"></ellipse>
                    <circle cx="84" cy="155" r="5" fill="#F4A3A0" opacity="0.8"></circle>
                    <circle cx="115" cy="155" r="5" fill="#F4A3A0" opacity="0.8"></circle>
                    <path d="M96 156q3.5 3 7 0" fill="none" stroke="#7A3B33" stroke-width="1.8" stroke-linecap="round"></path>
                  </g>
                  <path d="M70 114a40 40 0 0 1 24-22" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.85"></path>
                  <circle cx="150" cy="112" r="4" fill="${I.accent}"></circle>
                </g>
              </g>
            </svg>`,
  emptyCoin: (C, I, w, h) => `<svg viewBox="0 0 120 124" width="${w}" height="${h}" aria-hidden="true" style="display: block; overflow: visible;"><circle cx="60" cy="65" r="52" fill="url(#fscSide)"></circle><circle cx="60" cy="58" r="52" fill="url(#fscRim)"></circle><circle cx="60" cy="58" r="43" fill="url(#fscWell)"></circle><circle cx="60" cy="59" r="40" fill="url(#fscFace)"></circle><ellipse cx="47" cy="40" rx="17" ry="7" transform="rotate(-32 47 40)" fill="#FFFFFF" opacity=".2"></ellipse><path d="M60.0 31.0L68.8 47.9L87.6 51.0L74.3 64.6L77.0 83.5L60.0 75.0L43.0 83.5L45.7 64.6L32.4 51.0L51.2 47.9Z" transform="translate(0 2.6)" fill="${C.sideLo}" opacity=".45"></path><path d="M60.0 31.0L68.8 47.9L87.6 51.0L74.3 64.6L77.0 83.5L60.0 75.0L43.0 83.5L45.7 64.6L32.4 51.0L51.2 47.9Z" fill="url(#fscStar)" stroke="#FFF6E0" stroke-width="1.6" stroke-linejoin="round"></path><path d="M60 60L60.0 31.0L68.8 47.9ZM60 60L87.6 51.0L74.3 64.6ZM60 60L77.0 83.5L60.0 75.0ZM60 60L43.0 83.5L45.7 64.6ZM60 60L32.4 51.0L51.2 47.9Z" fill="#FFFFFF" opacity=".35"></path><path d="M60 60L51.2 47.9L60.0 31.0ZM60 60L68.8 47.9L87.6 51.0ZM60 60L74.3 64.6L77.0 83.5ZM60 60L60.0 75.0L43.0 83.5ZM60 60L45.7 64.6L32.4 51.0Z" fill="${C.face}" opacity=".3"></path><path d="M16.8 42.3A46 46 0 0 1 40.6 16.3" fill="none" stroke="#FFFFFF" stroke-width="3.6" stroke-linecap="round" opacity=".85"></path><g clip-path="url(#fscClip)"><g transform="rotate(22 60 60)"><rect x="-60" y="-30" width="14" height="190" fill="#FFFFFF" opacity=".4"></rect></g></g><path opacity=".8" d="M92 22Q93 27 98 28Q93 29 92 34Q91 29 86 28Q91 27 92 22Z" fill="#FFFFFF"></path></svg>`,
  bigCoin: (C, I, w, h) => `<svg viewBox="0 0 120 124" width="${w}" height="${h}" aria-hidden="true" style="display: block; overflow: visible;"><circle cx="60" cy="65" r="52" fill="url(#fscSide)"></circle><circle cx="60" cy="58" r="52" fill="url(#fscRim)"></circle><circle cx="60" cy="58" r="43" fill="url(#fscWell)"></circle><circle cx="60" cy="59" r="40" fill="url(#fscFace)"></circle><ellipse cx="47" cy="40" rx="17" ry="7" transform="rotate(-32 47 40)" fill="#FFFFFF" opacity=".2"></ellipse><path d="M60.0 31.0L68.8 47.9L87.6 51.0L74.3 64.6L77.0 83.5L60.0 75.0L43.0 83.5L45.7 64.6L32.4 51.0L51.2 47.9Z" transform="translate(0 2.6)" fill="${C.sideLo}" opacity=".45"></path><path d="M60.0 31.0L68.8 47.9L87.6 51.0L74.3 64.6L77.0 83.5L60.0 75.0L43.0 83.5L45.7 64.6L32.4 51.0L51.2 47.9Z" fill="url(#fscStar)" stroke="#FFF6E0" stroke-width="1.6" stroke-linejoin="round"></path><path d="M60 60L60.0 31.0L68.8 47.9ZM60 60L87.6 51.0L74.3 64.6ZM60 60L77.0 83.5L60.0 75.0ZM60 60L43.0 83.5L45.7 64.6ZM60 60L32.4 51.0L51.2 47.9Z" fill="#FFFFFF" opacity=".35"></path><path d="M60 60L51.2 47.9L60.0 31.0ZM60 60L68.8 47.9L87.6 51.0ZM60 60L74.3 64.6L77.0 83.5ZM60 60L60.0 75.0L43.0 83.5ZM60 60L45.7 64.6L32.4 51.0Z" fill="${C.face}" opacity=".3"></path><path d="M16.8 42.3A46 46 0 0 1 40.6 16.3" fill="none" stroke="#FFFFFF" stroke-width="3.6" stroke-linecap="round" opacity=".85"></path><g clip-path="url(#fscClip)"><g transform="rotate(22 60 60)"><rect class="shine" x="-60" y="-30" width="14" height="190" fill="#FFFFFF" opacity=".4"></rect></g></g><path class="twinkle" d="M92 22Q93 27 98 28Q93 29 92 34Q91 29 86 28Q91 27 92 22Z" fill="#FFFFFF"></path></svg>`,
  missionSparks: (C, I, w, h) => `<svg class="spark s1" width="20" height="20" viewBox="-12 -12 24 24" style="position: absolute; left: 0; top: 8px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" fill="#FFF3D6"></path></svg><svg class="spark s2" width="16" height="16" viewBox="-12 -12 24 24" style="position: absolute; right: 0; top: 18px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" fill="#FFFFFF"></path></svg><svg class="spark s3" width="18" height="18" viewBox="-12 -12 24 24" style="position: absolute; right: 4px; bottom: 10px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" fill="#FFF3D6"></path></svg><svg class="spark s4" width="14" height="14" viewBox="-12 -12 24 24" style="position: absolute; left: 6px; bottom: 18px;"><path d="M0 -11Q2 -2 11 0Q2 2 0 11Q-2 2 -11 0Q-2 -2 0 -11Z" fill="#FFFFFF"></path></svg>`,
  flyCoin: (C, I, w, h) => `<svg class="flys" viewBox="0 0 24 24" width="${w}" height="${w}" style="${h}"><circle cx="12" cy="12.8" r="11" fill="url(#fscSide)"></circle><circle cx="12" cy="12" r="11" fill="url(#fscRim)"></circle><circle cx="12" cy="12" r="8.4" fill="url(#fscFace)"></circle><path d="M12.00 5.90L13.94 9.63L18.09 10.32L15.14 13.32L15.76 17.48L12.00 15.60L8.24 17.48L8.86 13.32L5.91 10.32L10.06 9.63Z" fill="url(#fscStar)"></path></svg>`
};