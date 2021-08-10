/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 *
 * @author mebjas <minhazav@gmail.com>
 *
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 *
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `Ошибка сканирования, error = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Ошибка получения userMedia, error = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "Устройство не поддерживает navigator.mediaDevices,"
        + "поддерживаемый cameraIdOrConfig в этом случае - deviceId параметр "
        + "(string).";
    }

    public static cameraStreamingNotSupported(): string {
        return "Браузер не поддерживает потоковую передачу видео.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Неизвестная ошибка. Не получилось запросить список устройств.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Доступ к камере возможен только из безопасного контекста, как https "
        + "или с localhost.";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 *
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "Сканирование";
    }

    public static idleStatus(): string {
        return "Ожидание";
    }

    public static errorStatus(): string {
        return "Ошибка";
    }

    public static permissionStatus(): string {
        return "Разрешение";
    }

    public static noCameraFoundErrorStatus(): string {
        return "Нет камеры";
    }

    public static lastMatch(decodedText: string): string {
        return `Последнее совпадение: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "Сканер EAN_13";
    }

    public static cameraPermissionTitle(): string {
        return "Запросить доступ к камере";
    }

    public static cameraPermissionRequesting(): string {
        return "Запрашиваем доступ к камере...";
    }

    public static scanButtonStopScanningText(): string {
        return "Стоп сканирования";
    }

    public static scanButtonStartScanningText(): string {
        return "Старт сканирования камерой";
    }

    /**
     * Text to show when camera scan is selected.
     *
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "Выбрать из галереи устройства";
    }

    /**
     * Text to show when file based scan is selected.
     *
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "Сканировать через Камеру";
    }
}
