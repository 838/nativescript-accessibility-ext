import { View as TNSView } from '@nativescript/core/ui/core/view';

export declare class AccessibilityHelper {
  public static updateAccessibilityProperties(tnsView: TNSView): void;
  public static sendAccessibilityEvent(androidView: android.view.View, eventName: string, text?: string): void;
  public static updateContentDescription(tnsView: TNSView): string;
}

export function getAndroidView<T extends android.view.View>(tnsView: TNSView): T;
export function getViewCompat(): typeof androidx.core.view.ViewCompat;
export function getUIView<T extends UIView>(view: TNSView): T;
